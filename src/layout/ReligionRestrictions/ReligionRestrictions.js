import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ReligionRestrictions.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function ReligionRestrictions() {
  const navigate = useNavigate();

  const rationName = localStorage.getItem("ration-name");

  const [religions, setReligions] = useState([
    {
      name: "ХРИСТИАНСТВО",
      enable: false,
      restrictions: [
        { name: "Пост", enable: false },
        { name: "Мясо в постные дни", enable: false },
        { name: "Скоромная пища", enable: false },
      ],
    },
    {
      name: "ИСЛАМ",
      enable: false,
      restrictions: [
        { name: "Харам", enable: false },
        { name: "Алкоголь", enable: false },
        { name: "Свинина", enable: false },
      ],
    },
    
  ]);

  const [searchQueries, setSearchQueries] = useState({
    ХРИСТИАНСТВО: "",
    ИСЛАМ: "",
  });

  const saveSelectedRestrictions = () => {
    const selected = religions.flatMap((religion) =>
      religion.restrictions
        .filter((restriction) => restriction.enable)
        .map((restriction) => ({
          religion: religion.name,
          restriction: restriction.name,
        }))
    );

    if (selected.length === 0) {
      alert("Выберите хотя бы одно ограничение");
      return;
    }

    if (!rationName) {
      alert("Название рациона обязательно");
      return;
    }

    axios
      .post(
        "http://127.0.0.1:8000/ration/restrictions/religion_restrictions/",
        {
          restrictions: selected,
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
        navigate("/CreatingRacionRestrictions");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };

  const handleCheckboxChange = useCallback(
    (religionIndex, restrictionIndex) => {
      setReligions((prevReligions) => {
        const updatedReligions = [...prevReligions];

        if (restrictionIndex === null) {
          const newEnableState = !updatedReligions[religionIndex].enable;
          updatedReligions[religionIndex] = {
            ...updatedReligions[religionIndex],
            enable: newEnableState,
            restrictions: updatedReligions[religionIndex].restrictions.map(
              (restriction) => ({
                ...restriction,
                enable: newEnableState,
              })
            ),
          };
        } else {
          updatedReligions[religionIndex].restrictions[restrictionIndex] = {
            ...updatedReligions[religionIndex].restrictions[restrictionIndex],
            enable:
              !updatedReligions[religionIndex].restrictions[restrictionIndex]
                .enable,
          };

          const allEnabled = updatedReligions[religionIndex].restrictions.every(
            (restriction) => restriction.enable
          );
          const anyDisabled = updatedReligions[religionIndex].restrictions.some(
            (restriction) => !restriction.enable
          );

          updatedReligions[religionIndex].enable = allEnabled
            ? true
            : anyDisabled
            ? false
            : updatedReligions[religionIndex].enable;
        }

        return updatedReligions;
      });
    },
    []
  );

  const handleSearchChange = (religionName, value) => {
    setSearchQueries((prev) => ({
      ...prev,
      [religionName]: value,
    }));
  };

  const filterRestrictions = (religion) => {
    const query = searchQueries[religion.name] || "";
    if (!query) return religion.restrictions;

    return religion.restrictions.filter((restriction) =>
      restriction.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="religion-restriction">
      <Header navName="navTech" pageTitle={rationName} />
      <h1 className="religion-restriction__title">РЕЛИГИОЗНЫЕ ОГРАНИЧЕНИЯ</h1>
      <main className="religion-restriction__main">
        <div className="religion-restriction__wrapper">
          <div className="religion-restriction__religions">
            {religions.map((religion, religionIndex) => (
              <div
                key={religionIndex}
                className="religion-restriction__religion"
              >
                <div className="religion-restriction__tab">
                  <input
                    type="checkbox"
                    className="religion-restriction__tab-maincheckbox"
                    checked={religion.enable}
                    onChange={() => handleCheckboxChange(religionIndex, null)}
                  />
                  <div className="religion-restriction__tab-name">
                    {religion.name}
                  </div>
                </div>
                <div className="religion-restriction__block">
                  <input
                    type="text"
                    className="religion-restriction__block-search"
                    placeholder="Поиск"
                    value={searchQueries[religion.name]}
                    onChange={(e) =>
                      handleSearchChange(religion.name, e.target.value)
                    }
                  />
                  <div className="religion-restriction__restrictions-list">
                    {filterRestrictions(religion).map(
                      (restriction, restrictionIndex) => (
                        <div
                          key={restrictionIndex}
                          className="religion-restriction__restriction"
                        >
                          <div className="religion-restriction__restriction-control">
                            <input
                              type="checkbox"
                              className="religion-restriction__restriction-checkbox"
                              checked={restriction.enable}
                              onChange={() =>
                                handleCheckboxChange(
                                  religionIndex,
                                  restrictionIndex
                                )
                              }
                            />
                            <span className="religion-restriction__restriction-name">
                              {restriction.name}
                            </span>
                          </div>
                        </div>
                      )
                    )}
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
