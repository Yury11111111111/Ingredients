import React, { useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import Arrow from "../../style/img/Arrow.png";
import SelectedIngredients from "../../components/SelectedIngredients/SelectedIngredients";
import "./IngredientRestrictions.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function IngredientRestrictions() {
  const navigate = useNavigate();
  const rationName = localStorage.getItem("ration-name");

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

  const toggleExpand = (categoryIndex) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[categoryIndex] = {
        ...updatedCategories[categoryIndex],
        expanded: !updatedCategories[categoryIndex].expanded,
      };
      return updatedCategories;
    });
  };

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
            expanded: isCategoryMatch ? category.expanded : true,
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  const saveSelectedIngredients = () => {
    const selected = categories.flatMap((category) =>
      category.ingredients
        .filter((ingredient) => ingredient.enable)
        .map((ingredient) => ingredient.name)
    );

    if (selected.length === 0) {
      alert("Выберите хотя бы один ингредиент");
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
        "http://127.0.0.1:8000/ration/restrictions/ingredients/",
        {
          ingredients: selected,
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
        console.log("Сохранено:", response);
        navigate("/CreatingRacionRestrictions");
      })
      .catch((error) => {
        console.error("Ошибка:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Ошибка сохранения");
      });
  };

  return (
    <>
      <Header navName="navTech" pageTitle={rationName} />
      <div className="ing-restriction">
        <h1 className="ing-restriction__title">ОГРАНИЧЕНИЯ по ингредиентам</h1>
        <main className="ing-restriction__main">
          <div className="ing-restriction__wrapper">
            <div className="ing-restriction__choice-block">
              <input
                type="text"
                className="ing-restriction__search-input"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="ing-restriction__ingredients-list">
                {filterCategories().map((category, categoryIndex) => (
                  <div key={category.id} className="ing-restriction__category">
                    <div className="ing-restriction__category-header">
                      <div className="ing-restriction__category-control">
                        <input
                          type="checkbox"
                          className="ing-restriction__category-checkbox"
                          checked={category.enable}
                          onChange={() =>
                            handleCheckboxChange(category.id, null)
                          }
                        />
                        <span className="ing-restriction__category-name">
                          {category.name}
                        </span>
                      </div>
                      {category.ingredients.length > 0 && (
                        <img
                          src={Arrow}
                          alt="arrow"
                          className={`ing-restriction__category-arrow ${
                            category.expanded
                              ? "ing-restriction__category-arrow_rotated"
                              : ""
                          }`}
                          onClick={() => toggleExpand(categoryIndex)}
                        />
                      )}
                    </div>
                    {category.expanded && (
                      <div className="ing-restriction__subcategories">
                        {category.ingredients.map((ingredient) => (
                          <div
                            key={ingredient.id}
                            className="ing-restriction__subcategory"
                          >
                            <input
                              type="checkbox"
                              className="ing-restriction__subcategory-checkbox"
                              checked={ingredient.enable}
                              onChange={() =>
                                handleCheckboxChange(category.id, ingredient.id)
                              }
                            />
                            <span className="ing-restriction__subcategory-name">
                              {ingredient.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="ing-restriction__divider"></div>
            </div>
            <SelectedIngredients
              categories={categories}
              className="ing-restriction__selected-ingredients"
            />
          </div>
        </main>
        <div className="ing-restriction__button">
          <Button
            type="submit"
            text="Сохранить"
            onClick={saveSelectedIngredients}
          />
        </div>
      </div>
    </>
  );
}
