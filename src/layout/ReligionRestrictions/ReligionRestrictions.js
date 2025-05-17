import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ReligionRestrictions.css";

import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function ReligionRestrictions() {
  const [religions, setReligions] = useState([
    {
      name: "ХРИСТИАНСТВО",
      restrictions: ["Пост", "Мясо в постные дни", "Скоромная пища"],
    },
    {
      name: "ИСЛАМ",
      restrictions: ["Харам", "Алкоголь", "Свинина"],
    },
    {
      name: "ИУДАИЗМ",
      restrictions: ["Кошерные ограничения", "Мясо с молоком"],
    },
  ]);

  const [checkedRestrictions, setCheckedRestrictions] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const initialChecked = {};
    religions.forEach((religion) => {
      religion.restrictions.forEach((restriction) => {
        initialChecked[`${religion.name}-${restriction}`] = false;
      });
    });
    setCheckedRestrictions(initialChecked);
  }, []);

  const toggleRestrictionMainCheck = (religionName, index) => {
    let key = `${religionName}`;
    religions[index].restrictions.forEach((r) => {
      let subkey = `${religionName}-${r}`;
      setCheckedRestrictions((prev) => ({
        ...prev,
        [subkey]: !prev[subkey],
      }));
    });
    setCheckedRestrictions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleRestrictionCheck = (religionName, restriction, index) => {
    let key = `${religionName}-${restriction}`;
    let subcotegrys = Object.keys(checkedRestrictions).filter((key) =>
      key.includes(`${religionName}`)
    );
    let countOfTrue = subcotegrys.filter(
      (key) => checkedRestrictions[key] === true
    ).length;
    if (subcotegrys.length === countOfTrue) {
      console.log(countOfTrue);
    }
    console.log(subcotegrys.length);

    setCheckedRestrictions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    console.log(checkedRestrictions);
  };

  const filterRestrictions = (religion) => {
    const filterReligion = religion?.name;
    if (!filterReligion) return [];

    return filterReligion.restrictions.filter((restriction) =>
      restriction.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const saveSelectedRestrictions = () => {
    const selected = Object.entries(checkedRestrictions)
      .filter(([_, isChecked]) => isChecked)
      .map(([key]) => key.split("-"));

    if (selected.length === 0) {
      alert("Выберите хотя бы одно ограничение");
      return;
    }

    const rationName =
      localStorage.getItem("ration-name") ||
      prompt("Введите название рациона:");

    if (!rationName) {
      alert("Название рациона обязательно");
      return;
    }

    const formattedRestrictions = selected.map(([religion, restriction]) => ({
      religion,
      restriction,
    }));

    axios
      .post(
        "http://127.0.0.1:8000/ration/restrictions/religion_restrictions/",
        {
          restrictions: formattedRestrictions,
          "ration-name": rationName,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken":
              document.cookie.match(/csrftoken=([^;]+)/)?.[1] || "",
          },
        }
      )
      .then((response) => {
        console.log("Сохранено:", response.data);
        alert("Религиозные ограничения успешно сохранены");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert(error.response?.data?.error || "Ошибка сохранения ограничений");
      });
  };

  return (
    <div className="religion-restriction">
      <Header navName="navTech" />
      <h1 className="religion-restriction__title">РЕЛИГИОЗНЫЕ ОГРАНИЧЕНИЯ</h1>
      <main className="religion-restriction__main">
        <div className="religion-restriction__wrapper">
          <div className="religion-restriction__religions">
            {religions.map((religion, index) => (
              <div className="religion-restriction__religion">
                <div key={index} className={"religion-restriction__tab"}>
                  <input
                    type="checkbox"
                    className="religion-restriction__tab-maincheckbox"
                    checked={checkedRestrictions[`${religion.name}`] || false}
                    onChange={() =>
                      toggleRestrictionMainCheck(religion.name, index)
                    }
                  />
                  <div className="religion-restriction__tab-name">
                    {religion.name}
                  </div>
                </div>
                <div className="religion-restriction__block">
                  <input
                    type="text"
                    className="religion-restriction__block-search"
                    placeholder={"Поиск"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="religion-restriction__restrictions-list">
                    {religions[index].restrictions.map((restriction, index) => (
                      <div
                        key={index}
                        className="religion-restriction__restriction"
                      >
                        <div className="religion-restriction__restriction-control">
                          <input
                            type="checkbox"
                            className="religion-restriction__restriction-checkbox"
                            checked={
                              checkedRestrictions[
                                `${religion.name}-${restriction}`
                              ] || false
                            }
                            onChange={() =>
                              toggleRestrictionCheck(religion.name, restriction)
                            }
                          />
                          <span className="religion-restriction__restriction-name">
                            {restriction}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="religion-restriction__button">
        <Button
          type="submit"
          text="Сохранить"
          onClick={saveSelectedRestrictions}
        />
      </div>
    </div>
  );
}
