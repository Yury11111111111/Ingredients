import React, { useState, useCallback } from "react";
import Arrow from "../../style/img/Arrow.png";
import "./IngredientWindow.css";
import Button from "../Button/Button";

export default function IngredientWindow({
  isOpen,
  position,
  dayId,
  onClose,
  onSelect,
}) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Грибы",
      enable: false,
      expanded: false,
      ingredients: [
        { id: 1, name: "Грибы приморские", enable: false },
        { id: 2, name: "Грибы Отморские", enable: false },
        { id: 3, name: "Грибы заморские", enable: false },
      ],
    },
    {
      id: 2,
      name: "Овощи",
      enable: false,
      expanded: false,
      ingredients: [
        { id: 4, name: "Помидор", enable: false },
        { id: 5, name: "Огурец", enable: false },
        { id: 6, name: "Кабачок", enable: false },
      ],
    },
    {
      id: 3,
      name: "Мясо",
      enable: false,
      expanded: false,
      ingredients: [
        { id: 7, name: "Жирное", enable: false },
        { id: 8, name: "Хрупкое", enable: false },
        { id: 9, name: "Заморское", enable: false },
      ],
    },
    {
      id: 4,
      name: "Оливки",
      enable: false,
      expanded: false,
      ingredients: [
        { id: 10, name: "Оливки японские", enable: false },
        { id: 11, name: "Оливки Отморские", enable: false },
        { id: 12, name: "Оливки заморские", enable: false },
        { id: 13, name: "Оливки еврейские", enable: false },
        { id: 14, name: "Оливки пируанские", enable: false },
      ],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = useCallback((categoryId, ingredientId) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.id === categoryId) {
          if (ingredientId === null) {
            const newEnableState = !category.enable;
            return {
              ...category,
              enable: newEnableState,
              ingredients: category.ingredients.map((ingredient) => ({
                ...ingredient,
                enable: newEnableState,
              })),
            };
          } else {
            const updatedIngredients = category.ingredients.map(
              (ingredient) => {
                if (ingredient.id === ingredientId) {
                  return {
                    ...ingredient,
                    enable: !ingredient.enable,
                  };
                }
                return ingredient;
              }
            );

            const allEnabled = updatedIngredients.every((ing) => ing.enable);
            const anyDisabled = updatedIngredients.some((ing) => !ing.enable);

            return {
              ...category,
              ingredients: updatedIngredients,
              enable: allEnabled ? true : anyDisabled ? false : category.enable,
            };
          }
        }
        return category;
      });
    });
  }, []);

  const toggleExpand = useCallback((categoryId) => {
    
    
    setCategories((prevCategories) => {
      
      return prevCategories.map((category) => {
        if (category.id === categoryId) {
          
          return {
            ...category,
            expanded: !category.expanded,
          };
        }
        return category;
      });
    });
  }, []);

  const filterCategories = () => {
    if (!searchQuery) return categories;

    return categories
      .map((category) => {
        const isCategoryMatch = category.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const filteredIngredients = category.ingredients.filter((ingredient) =>
          ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (isCategoryMatch || filteredIngredients.length > 0) {
          return {
            ...category,
            ingredients: isCategoryMatch
              ? category.ingredients
              : filteredIngredients,
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  const handleApply = () => {
    const selected = [];
    categories.forEach((category) => {
      if (category.enable) {
        selected.push({
          name: category.name,
          category: category.name,
        });
        return;
      }
      category.ingredients.forEach((ingredient) => {
        if (ingredient.enable) {
          selected.push({
            name: ingredient.name,
            category: category.name,
          });
        }
      });
    });
    onSelect(selected, dayId);
  };

  if (!isOpen) return null;

  return (
    <div
      className="ingredient-window"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div className="ingredient-window__choice-block">
        <input
          type="text"
          className="ingredient-window__search-input"
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="ingredient-window__ingredients-list">
          {filterCategories().map((category) => (
            <div key={category.id} className="ingredient-window__category">
              <div className="ingredient-window__category-header">
                <div className="ingredient-window__category-control">
                  <input
                    type="checkbox"
                    className="ingredient-window__checkbox"
                    checked={category.enable}
                    onChange={() => handleCheckboxChange(category.id, null)}
                  />
                  <span className="ingredient-window__category-name">
                    {category.name}
                  </span>
                </div>
                {category.ingredients.length > 0 && (
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={`ingredient-window__arrow ${
                      category.expanded
                        ? "ingredient-window__arrow_rotated"
                        : ""
                    }`}
                    onClick={() => toggleExpand(category.id)}
                  />
                )}
              </div>
              {category.expanded && (
                <div className="ingredient-window__subcategories">
                  {category.ingredients.map((ingredient) => (
                    <div
                      key={ingredient.id}
                      className="ingredient-window__subcategory"
                    >
                      <input
                        type="checkbox"
                        className="ingredient-window__checkbox"
                        checked={ingredient.enable}
                        onChange={() =>
                          handleCheckboxChange(category.id, ingredient.id)
                        }
                      />
                      <span className="ingredient-window__subcategory-name">
                        {ingredient.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="ingredient-window__button-container">
          <button className="ingredient-window__button" onClick={handleApply}>
            Готово
          </button>
        </div>
      </div>
    </div>
  );
}
