import React, { useState, useCallback, useEffect } from "react";
import "./CompositionWindow.css";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function CompositionWindow({
  isOpen,
  position,
  dayId,
  onClose,
  onSelect,
}) {
  const [compositionsData, setCompositionsData] = useState([]);

  const handleCheckboxChange = useCallback((categoryIndex, ingredientIndex) => {
    setCompositionsData((prevCategories) => {
      const updatedCategories = [...prevCategories];

      if (ingredientIndex === null) {
        const newEnableState = !updatedCategories[categoryIndex].enable;
        updatedCategories[categoryIndex] = {
          ...updatedCategories[categoryIndex],
          enable: newEnableState,
        };
      } else {
        updatedCategories[categoryIndex].ingredients[ingredientIndex] = {
          ...updatedCategories[categoryIndex].ingredients[ingredientIndex],
          enable:
            !updatedCategories[categoryIndex].ingredients[ingredientIndex]
              .enable,
        };
      }

      return updatedCategories;
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/main/")
      .then((response) => {
        if (compositionsData.length === 0) {
          response.data.compositions.map((comp) => {
            setCompositionsData((prev) => [
              ...prev,
              {
                name: comp.name,
                enable: false,
              },
            ]);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApply = () => {
    const selected = [];
    compositionsData.forEach((category) => {
      if (category.enable) {
        selected.push({
          name: category.name,
          category: category.name,
        });
        return;
      }
    });
    console.log(selected);

    onSelect(selected, dayId);
  };

  if (!isOpen) return null;

  return (
    <div
      className="composition-window"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div className="composition-window__choice-block">
        <div className="composition-window__ingredients-list">
          {compositionsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="composition-window__category">
              <div className="composition-window__category-header">
                <div className="composition-window__category-control">
                  <input
                    type="checkbox"
                    className="composition-window__checkbox"
                    checked={category.enable}
                    onChange={() => handleCheckboxChange(categoryIndex, null)}
                  />
                  <span className="composition-window__category-name">
                    {category.name}
                  </span>
                </div>
              </div>
              {category.expanded && (
                <div className="composition-window__subcategories">
                  {category.ingredients.map((ingredient, ingredientIndex) => (
                    <div
                      key={ingredientIndex}
                      className="composition-window__subcategory"
                    >
                      <input
                        type="checkbox"
                        className="composition-window__checkbox"
                        checked={ingredient.enable}
                        onChange={() =>
                          handleCheckboxChange(categoryIndex, ingredientIndex)
                        }
                      />
                      <span className="composition-window__subcategory-name">
                        {ingredient.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="composition-window__button-container">
          <button
            className="composition-window__button"
            onClick={() => {
              onClose();
              handleApply();
            }}
          >
            Готово
          </button>
        </div>
      </div>
    </div>
  );
}
