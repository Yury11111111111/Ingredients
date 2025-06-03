import React, { useState } from "react";
import Arrow from "../../style/img/Arrow.png";
import "./SelectedIngredients.css";

export default function SelectedIngredients({ categories = [] }) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const selectedItems = categories.reduce((acc, category) => {
    const selectedIngredients = category.ingredients.filter(
      (ing) => ing.enable
    );
    if (selectedIngredients.length > 0) {
      acc.push({
        categoryName: category.name,
        ingredients: selectedIngredients,
        allSelected: selectedIngredients.length === category.ingredients.length,
        expanded: expandedCategories[category.name] || false,
      });
    }
    return acc;
  }, []);

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="selected-ingredients">
      <div className="selected-ingredients__title">Выбранные ингредиенты</div>
      <div className="selected-ingredients__divider"></div>

      {selectedItems.length > 0 ? (
        selectedItems.map((item, index) => (
          <div key={index} className="selected-ingredients__category">
            <div className="selected-ingredients__category-header">
              <div className="selected-ingredients__category-control">
                <input
                  type="checkbox"
                  className={`selected-ingredients__checkbox ${
                    !item.allSelected
                      ? "selected-ingredients__checkbox_partial"
                      : ""
                  }`}
                  checked={true}
                  readOnly
                />
                <span className="selected-ingredients__category-name">
                  {item.categoryName}
                </span>
              </div>

              {item.ingredients.length > 0 && (
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`selected-ingredients__arrow ${
                    item.expanded ? "selected-ingredients__arrow_rotated" : ""
                  }`}
                  onClick={() => toggleCategory(item.categoryName)}
                />
              )}
            </div>

            {item.expanded && (
              <div className="selected-ingredients__subcategories">
                {item.ingredients.map((ingredient, ingIndex) => (
                  <div
                    key={ingIndex}
                    className="selected-ingredients__subcategory"
                  >
                    <input
                      type="checkbox"
                      className="selected-ingredients__subcategory-checkbox"
                      checked={true}
                      readOnly
                    />
                    <span className="selected-ingredients__subcategory-name">
                      {ingredient.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="selected-ingredients__empty">
          <span className="selected-ingredients__empty-text">
            Ничего не выбрано
          </span>
        </div>
      )}
      <div className="selected-ingredients__divider"></div>
    </div>
  );
}
