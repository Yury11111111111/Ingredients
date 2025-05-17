import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./MedicalRestrictions.css";

import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function MedicalRestrictions() {
  const [diseases, setDiseases] = useState([
    "Сердечно-сосудистые заболевания",
    "Сахарный диабет",
    "Гипертония",
    "Аллергии",
  ]);

  const [checkedDiseases, setCheckedDiseases] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Инициализируем состояния для всех заболеваний
  useEffect(() => {
    const initialChecked = {};
    diseases.forEach((disease) => {
      initialChecked[disease] = false;
    });
    setCheckedDiseases(initialChecked);
  }, []);

  const toggleDiseaseCheck = (disease) => {
    setCheckedDiseases((prev) => ({
      ...prev,
      [disease]: !prev[disease],
    }));
  };

  const filterDiseases = () => {
    return diseases.filter((disease) =>
      disease.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const saveSelectedDiseases = () => {
    const selected = Object.entries(checkedDiseases)
      .filter(([_, isChecked]) => isChecked)
      .map(([disease]) => disease);

    if (selected.length === 0) {
      alert("Выберите хотя бы одно заболевание");
      return;
    }

    const rationName =
      localStorage.getItem("ration-name") ||
      prompt("Введите название рациона:");

    if (!rationName) {
      alert("Название рациона обязательно");
      return;
    }

    axios
      .post(
        "http://127.0.0.1:8000/ration/restrictions/medical_restrictions/",
        {
          diseases: selected,
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
        alert("Медицинские ограничения успешно сохранены");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert(error.response?.data?.error || "Ошибка сохранения ограничений");
      });
  };

  return (
    <div className="med-restriction">
      <Header navName="navTech" />
      <h1 className="med-restriction__title">МЕДИЦИНСКИЕ ОГРАНИЧЕНИЯ</h1>
      <main className="med-restriction__main">
        <div className="med-restriction__wrapper">
          <div className="med-restriction__choice-block">
            <input
              type="text"
              className="med-restriction__search-input"
              placeholder="Поиск заболеваний"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="med-restriction__diseases-list">
              {filterDiseases().map((disease, index) => (
                <div key={index} className="med-restriction__disease">
                  <div className="med-restriction__disease-control">
                    <input
                      type="checkbox"
                      className="med-restriction__disease-checkbox"
                      checked={checkedDiseases[disease] || false}
                      onChange={() => toggleDiseaseCheck(disease)}
                    />
                    <span className="med-restriction__disease-name">
                      {disease}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="med-restriction__button">
        <Button type="submit" text="Сохранить" onClick={saveSelectedDiseases} />
      </div>
    </div>
  );
}
