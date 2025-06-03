import React, { useState, useEffect, useCallback } from "react";
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
      name: "Грибы",
      enable: false,
      expanded: false,
      ingredients: [
        { name: "Грибы приморские", enable: false },
        { name: "Грибы Отморские", enable: false },
        { name: "Грибы заморские", enable: false },
      ],
    },
    {
      name: "Овощи",
      enable: false,
      expanded: false,
      ingredients: [
        { name: "Помидор", enable: false },
        { name: "Огурец", enable: false },
        { name: "Кабачок", enable: false },
      ],
    },
    {
      name: "Мясо",
      enable: false,
      expanded: false,
      ingredients: [
        { name: "Жирное", enable: false },
        { name: "Хрупкое", enable: false },
        { name: "Заморское", enable: false },
      ],
    },
    {
      name: "Оливки",
      enable: false,
      expanded: false,
      ingredients: [
        { name: "Оливки японские", enable: false },
        { name: "Оливки Отморские", enable: false },
        { name: "Оливки заморские", enable: false },
        { name: "Оливки еврейские", enable: false },
        { name: "Оливки пируанские", enable: false },
      ],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = useCallback((categoryIndex, ingredientIndex) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];

      if (ingredientIndex === null) {
        const newEnableState = !updatedCategories[categoryIndex].enable;
        updatedCategories[categoryIndex] = {
          ...updatedCategories[categoryIndex],
          enable: newEnableState,
          ingredients: updatedCategories[categoryIndex].ingredients.map(
            (ingredient) => ({
              ...ingredient,
              enable: newEnableState,
            })
          ),
        };
      } else {
        updatedCategories[categoryIndex].ingredients[ingredientIndex] = {
          ...updatedCategories[categoryIndex].ingredients[ingredientIndex],
          enable:
            !updatedCategories[categoryIndex].ingredients[ingredientIndex]
              .enable,
        };

        const allEnabled = updatedCategories[categoryIndex].ingredients.every(
          (ing) => ing.enable
        );
        const anyDisabled = updatedCategories[categoryIndex].ingredients.some(
          (ing) => !ing.enable
        );

        updatedCategories[categoryIndex].enable = allEnabled
          ? true
          : anyDisabled
          ? false
          : updatedCategories[categoryIndex].enable;
      }

      return updatedCategories;
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
                  <div
                    key={categoryIndex}
                    className="ing-restriction__category"
                  >
                    <div className="ing-restriction__category-header">
                      <div className="ing-restriction__category-control">
                        <input
                          type="checkbox"
                          className="ing-restriction__category-checkbox"
                          checked={category.enable}
                          onChange={() =>
                            handleCheckboxChange(categoryIndex, null)
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
                        {category.ingredients.map(
                          (ingredient, ingredientIndex) => (
                            <div
                              key={ingredientIndex}
                              className="ing-restriction__subcategory"
                            >
                              <input
                                type="checkbox"
                                className="ing-restriction__subcategory-checkbox"
                                checked={ingredient.enable}
                                onChange={() =>
                                  handleCheckboxChange(
                                    categoryIndex,
                                    ingredientIndex
                                  )
                                }
                              />
                              <span className="ing-restriction__subcategory-name">
                                {ingredient.name}
                              </span>
                            </div>
                          )
                        )}
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
