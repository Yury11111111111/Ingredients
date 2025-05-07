// CreatingRacionRestrictions.js
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./CreatingRacionRestrictions.css";
import Pencil from "../../style/img/Pencil";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function CreatingRacionRestrictions() {
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);

  const [sections, setSections] = useState([
    { id: "medical", name: "МЕДИЦИНСКИЕ", link: "/MedicalRestrictions" },
    { id: "religious", name: "РЕЛИГИОЗНЫЕ", link: "/ReligionRestrictions" },
    {
      id: "ingredients",
      name: "ПО ИНГРЕДИЕНТАМ",
      link: "/IngredientRestriction",
    },
  ]);

  const handleToggleRestriction = (restrictionId) => {
    setSelectedRestrictions((prev) =>
      prev.includes(restrictionId)
        ? prev.filter((id) => id !== restrictionId)
        : [...prev, restrictionId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected restrictions:", selectedRestrictions);
  };

  return (
    <>
      <Header />
      <div className="restrictions__title">ОГРАНИЧЕНИЯ</div>
      <main>
        <div className="restrictions">
          {sections.map((section) => (
            <div className="restrictions__section" key={section.id}>
              <div className="restrictions__section-header">
                <Link to={section.link}>
                  <div className="restrictions__section-title">
                    {section.name}
                  </div>
                  <Pencil className="restrictions__section-edit" />
                </Link>
              </div>
              <div className="restrictions__section-content">
                <p className="restrictions__section-subtitle">
                  ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:
                </p>
                <div className="restrictions__section-line"></div>
                <div className="restrictions__section-options">
                  <input
                    id={`check-${section.id}`}
                    type="checkbox"
                    checked={selectedRestrictions.includes(section.id)}
                    onChange={() => handleToggleRestriction(section.id)}
                    className="restrictions__section-checkbox"
                  />
                  <label
                    htmlFor={`check-${section.id}`}
                    className="restrictions__section-option"
                  >
                    {section.name}
                  </label>
                  <div className="restrictions__section-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button submit={handleSubmit} text="Продолжить" />
      </main>
    </>
  );
}
