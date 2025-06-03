import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./CreatingRacionRestrictions.css";
import Pencil from "../../style/img/Pencil";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function CreatingRacionRestrictions() {
  const navigate = useNavigate();
  const rationName = localStorage.getItem("ration-name");

  const [sections, setSections] = useState([
    {
      id: "medical",
      name: "МЕДИЦИНСКИЕ",
      link: "/MedicalRestrictions",
      restrictions: [
        { id: "diabetes", name: "Диабет", enable: false },
        { id: "allergy", name: "Аллергия на орехи", enable: false },
        { id: "lactose", name: "Непереносимость лактозы", enable: false },
      ],
    },
    {
      id: "religious",
      name: "РЕЛИГИОЗНЫЕ",
      link: "/ReligionRestrictions",
      restrictions: [
        { id: "halal", name: "Халяль", enable: false },
        { id: "kosher", name: "Кошерное", enable: false },
        { id: "vegetarian", name: "Вегетарианское", enable: false },
      ],
    },
    {
      id: "ingredients",
      name: "ПО ИНГРЕДИЕНТАМ",
      link: "/IngredientRestrictions",
      restrictions: [
        { id: "gluten", name: "Без глютена", enable: false },
        { id: "dairy", name: "Без молочных продуктов", enable: false },
        { id: "soy", name: "Без сои", enable: false },
      ],
    },
  ]);

  useEffect(() => {
    if (rationName) {
      axios
        .get(
          `http://127.0.0.1:8000/ration/restrictions/ingredients/?ration_name=${rationName}`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken":
                document.cookie.match(/csrftoken=([^;]+)/)?.[1] || "",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleToggleRestriction = (sectionId, restrictionId = null) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id !== sectionId) return section;

        const updatedRestrictions = section.restrictions.map((restriction) =>
          restriction.id === restrictionId
            ? { ...restriction, enable: !restriction.enable }
            : restriction
        );

        return {
          ...section,
          restrictions: updatedRestrictions,
        };
      })
    );
  };

  const post = () => {
    const selectedRestrictions = sections.flatMap((section) =>
      section.restrictions
        .filter((restriction) => restriction.enable)
        .map((restriction) => restriction.id)
    );

    axios
      .post(
        "http://127.0.0.1:8000/ration/restrictions/",
        {
          restrictions: selectedRestrictions,
          "ration-name": rationName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken":
              document.cookie.match(/csrftoken=([^;]+)/)?.[1] || "",
          },
        }
      )
      .then(() => {
        navigate("/CreatingRation");
      })
      .catch((error) => {
        console.error("Ошибка сохранения ограничений:", error);
        navigate("/CreatingRation");
      });
  };

  return (
    <>
      <Header navName="navTech" pageTitle={rationName || ""} />
      <div className="restrictions__title">ОГРАНИЧЕНИЯ</div>
      <main>
        <div className="restrictions">
          {sections.map((section) => (
            <div className="restrictions__section" key={section.id}>
              <Link to={section.link}>
                <div className="restrictions__section-header">
                  <div className="restrictions__section-title">
                    {section.name}
                  </div>
                  <Pencil className="restrictions__section-edit" />
                </div>
              </Link>
              <div className="restrictions__section-content">
                <p className="restrictions__section-subtitle">
                  ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:
                </p>
                <div className="restrictions__section-line"></div>

                {section.restrictions.map((restriction) => (
                  <>
                    <div
                      key={restriction.id}
                      className="restrictions__section-options"
                    >
                      <input
                        id={`restriction-${restriction.id}`}
                        type="checkbox"
                        checked={restriction.enable}
                        onChange={() =>
                          handleToggleRestriction(section.id, restriction.id)
                        }
                        className="restrictions__section-checkbox"
                      />
                      <label
                        htmlFor={`restriction-${restriction.id}`}
                        className="restrictions__section-option"
                      >
                        {restriction.name}
                      </label>
                    </div>
                    <div className="restrictions__section-line"></div>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="restrictions__button">
          <Button onClick={post} text="Продолжить" />
        </div>
      </main>
    </>
  );
}
