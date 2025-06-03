import React, { useEffect, useState } from "react";
import "./CreatingRationForPk.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatingRationForPk() {
  const navigate = useNavigate();

  const [totalValues, setTotalValues] = useState({
    Вес: 0,
    Вода: 0, // вода
    Бел: 0, // белки
    Жир: 0, // жиры
    НЖК: 0, // насыщенные жирные кислоты
    Хол: 0, // холестерин
    МДС: 0, // моно- и дисахариды
    Кр: 0, // крахмал
    Угл: 0, // углеводы
    ПВ: 0, // пищевые волокна
    ОК: 0, // органические кислоты
    Зола: 0, // зола
    Na: 0, // натрий
    K: 0, // калий
    Ca: 0, // кальций
    Mg: 0, // магний
    P: 0, // фосфор
    Fe: 0, // железо
    A: 0, // ретинол
    Кар: 0, // каротин
    РЭ: 0, // ретиноловый эквивалент
    ТЭ: 0, // токоферол
    B1: 0, // тиамин
    B2: 0, // рибофлавин
    PP: 0, // ниацин
    НЭ: 0, // ниациновый эквивалент
    C: 0, // аскорбиновая кислота
    ЭЦ: 0, // энергетическая ценность
    ПНЖК: 0, // полиненасыщенные жирные кислоты
  });
  const [defaultValues, setDefaultValues] = useState({
    Вес: 100, // граммы
    Вода: 88.3, // г
    Бел: 2.8, // г
    Жир: 2.5, // г
    НЖК: 1.5, // г (насыщенные жирные кислоты)
    Хол: 8, // мг (холестерин)
    МДС: 4.7, // г (моно- и дисахариды)
    Кр: 0.2, // г (крахмал)
    Угл: 4.7, // г (углеводы)
    ПВ: 0.1, // г (пищевые волокна)
    ОК: 0.1, // г (органические кислоты)
    Зола: 0.7, // г
    Na: 50, // мг (натрий)
    K: 146, // мг (калий)
    Ca: 120, // мг (кальций)
    Mg: 14, // мг (магний)
    P: 95, // мг (фосфор)
    Fe: 0.1, // мг (железо)
    A: 0.022, // мг (ретинол)
    Кар: 0.01, // мг (каротин)
    РЭ: 25, // мкг (ретиноловый эквивалент)
    ТЭ: 0.09, // мг (токоферол)
    B1: 0.04, // мг (тиамин)
    B2: 0.15, // мг (рибофлавин)
    PP: 0.8, // мг (ниацин)
    НЭ: 1.8, // мг (ниациновый эквивалент)
    C: 1.3, // мг (аскорбиновая кислота)
    ЭЦ: 52, // ккал (энергетическая ценность)
    ПНЖК: 0.2, // г (полиненасыщенные жирные кислоты)
  });

  const [categorys, setCategorys] = useState([
    {
      name: "Молоко и молочные продукты",
      enable: false,
      ingredients: [
        {
          name: "Молоко пастеризованное 1% жирности",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Молоко топленое 1% жирности",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Кефир 1% жирности",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Йогурт натуральный 1.5% жирности",
          enable: false,
          value: { ...defaultValues },
        },
      ],
    },
    {
      name: "Мясные продукты",
      enable: false,
      ingredients: [
        {
          name: "Куриная грудка",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Филе индейки",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Говядина постная",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Фарш куриный",
          enable: false,
          value: { ...defaultValues },
        },
      ],
    },
    {
      name: "Овощи",
      enable: false,
      ingredients: [
        {
          name: "Брокколи",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Морковь",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Цветная капуста",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Кабачки",
          enable: false,
          value: { ...defaultValues },
        },
      ],
    },
    {
      name: "Фрукты",
      enable: false,
      ingredients: [
        {
          name: "Яблоки",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Бананы",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Апельсины",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Груши",
          enable: false,
          value: { ...defaultValues },
        },
      ],
    },
    {
      name: "Крупы и злаки",
      enable: false,
      ingredients: [
        {
          name: "Гречневая крупа",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Овсяные хлопья",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Рис бурый",
          enable: false,
          value: { ...defaultValues },
        },
        {
          name: "Киноа",
          enable: false,
          value: { ...defaultValues },
        },
      ],
    },
  ]);

  const totalChange = () => {
    let newTotal = {
      Вес: 0,
      Вода: 0, // вода
      Бел: 0, // белки
      Жир: 0, // жиры
      НЖК: 0, // насыщенные жирные кислоты
      Хол: 0, // холестерин
      МДС: 0, // моно- и дисахариды
      Кр: 0, // крахмал
      Угл: 0, // углеводы
      ПВ: 0, // пищевые волокна
      ОК: 0, // органические кислоты
      Зола: 0, // зола
      Na: 0, // натрий
      K: 0, // калий
      Ca: 0, // кальций
      Mg: 0, // магний
      P: 0, // фосфор
      Fe: 0, // железо
      A: 0, // ретинол
      Кар: 0, // каротин
      РЭ: 0, // ретиноловый эквивалент
      ТЭ: 0, // токоферол
      B1: 0, // тиамин
      B2: 0, // рибофлавин
      PP: 0, // ниацин
      НЭ: 0, // ниациновый эквивалент
      C: 0, // аскорбиновая кислота
      ЭЦ: 0, // энергетическая ценность
      ПНЖК: 0, // полиненасыщенные жирные кислоты
    };

    Object.entries(categorys).map(([key, val]) => [
      Object.entries(val.ingredients).map(([key, val]) => [
        val.enable === true
          ? Object.entries(val.value).map(([key, val]) => [
              (newTotal[key] += Number(val)),
            ])
          : newTotal,
      ]),
    ]);
    setTotalValues(newTotal);
  };

  useEffect(() => {
    totalChange();
  }, [categorys]);

  const handleWeightChange = (categoryIndex, ingredientIndex, value) => {
    const newWeight = Number(value);

    setCategorys((prevCategorys) => {
      const updatedCategorys = [...prevCategorys];
      const updatedingredients = [
        ...updatedCategorys[categoryIndex].ingredients,
      ];

      updatedingredients[ingredientIndex] = {
        ...updatedingredients[ingredientIndex],
        value: {
          ...updatedingredients[ingredientIndex].value,
          ...Object.fromEntries(
            Object.entries(updatedingredients[ingredientIndex].value).map(
              ([key, val]) => [
                key,
                key === "Вес"
                  ? newWeight
                  : newWeight !== 0
                  ? (
                      (Number(defaultValues[key]) * newWeight) /
                      defaultValues["Вес"]
                    ).toFixed(3)
                  : 0,
              ]
            )
          ),
        },
      };

      updatedCategorys[categoryIndex] = {
        ...updatedCategorys[categoryIndex],
        ingredients: updatedingredients,
      };
      return updatedCategorys;
    });
  };

  const handleCheckboxChange = React.useCallback(
    (categoryIndex, ingredientIndex) => {
      setCategorys((prevCategorys) => {
        const updatedCategorys = [...prevCategorys];

        if (ingredientIndex === null) {
          const newEnableState = !updatedCategorys[categoryIndex].enable;
          updatedCategorys[categoryIndex] = {
            ...updatedCategorys[categoryIndex],
            enable: newEnableState,
            ingredients: updatedCategorys[categoryIndex].ingredients.map(
              (ing) => ({
                ...ing,
                enable: newEnableState,
              })
            ),
          };
        } else {
          updatedCategorys[categoryIndex].ingredients[ingredientIndex] = {
            ...updatedCategorys[categoryIndex].ingredients[ingredientIndex],
            enable:
              !updatedCategorys[categoryIndex].ingredients[ingredientIndex]
                .enable,
          };

          const allEnabled = updatedCategorys[categoryIndex].ingredients.every(
            (ing) => ing.enable
          );
          const anyDisabled = updatedCategorys[categoryIndex].ingredients.some(
            (ing) => !ing.enable
          );

          updatedCategorys[categoryIndex].enable = allEnabled
            ? true
            : anyDisabled
            ? false
            : updatedCategorys[categoryIndex].enable;
        }

        return updatedCategorys;
      });
    },
    []
  );

  const post = () => {
    // todo
    // axiosа
    //   .post("http://127.0.0.1:8000/ration/", formData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     localStorage.setItem("ration-name", response.data.ration.name);
    //     navigate("/CreatingRacionRestrictions");
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка:", error);
    //   });
    navigate("/CreatingPk");
  };

  return (
    <>
      <main className="ration-for-pk__main">
        <div className="ration-for-pk__wrapper">
          <form
            name="newRacionForm"
            method="post"
            className="ration-for-pk__form"
            action="/pk"
            id="newRacionForm"
          >
            <div className="ration-for-pk__table-container">
              <div className="ration-for-pk__scroll-container">
                <table className="ration-for-pk__table">
                  <thead>
                    <tr className="ration-for-pk__title-row">
                      <th
                        rowSpan={2}
                        className="ration-for-pk__title-cell ration-for-pk__title-cell_main"
                      >
                        Ингредиенты
                      </th>
                      <th
                        colSpan={Object.keys(totalValues).length}
                        className="ration-for-pk__title-cell ration-for-pk__title-cell_main"
                      >
                        Нутриенты
                      </th>
                    </tr>
                    <tr>
                      {Object.keys(totalValues).map((field) => (
                        <th
                          key={field}
                          className={`ration-for-pk__title-cell ${field}`}
                        >
                          {field}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="ration-for-pk__category-row">
                      <td
                        colSpan={Object.keys(totalValues).length + 1}
                        className="ration-for-pk__category"
                      >
                        Выбранные ингредиенты
                      </td>
                    </tr>
                    <tr className="ration-for-pk__total-row">
                      <td className="ration-for-pk__food-composition-total">
                        Итого:
                      </td>
                      {Object.keys(totalValues).map((field) => (
                        <td key={field.key}>
                          <input
                            type="number"
                            name={field}
                            value={Number(totalValues[field]).toString()}
                            disabled={true}
                          />
                        </td>
                      ))}
                    </tr>
                    {categorys.map((category, categoryIndex) => (
                      <React.Fragment key={`category-${categoryIndex}`}>
                        <tr className="ration-for-pk__category-row">
                          <td
                            colSpan={Object.keys(totalValues).length + 1}
                            className="ration-for-pk__category"
                          >
                            <input
                              type="checkbox"
                              checked={category.enable}
                              onChange={() =>
                                handleCheckboxChange(categoryIndex, null)
                              }
                              className="ration-for-pk__checkbox"
                            />
                            {category.name}
                          </td>
                        </tr>

                        {category.ingredients.map(
                          (ingredient, ingredientIndex) => (
                            <tr
                              key={`ingredient-${categoryIndex}-${ingredientIndex}`}
                              className="ration-for-pk__ingredient-row"
                            >
                              <td className="ration-for-pk__ingredient-name">
                                <input
                                  type="checkbox"
                                  checked={ingredient.enable}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      categoryIndex,
                                      ingredientIndex
                                    )
                                  }
                                  className="ration-for-pk__checkbox"
                                />
                                <div>{ingredient.name}</div>
                              </td>
                              {Object.keys(ingredient.value).map(
                                (fieldName) => (
                                  <td
                                    key={`${categoryIndex}-${ingredientIndex}-${fieldName}`}
                                  >
                                    <input
                                      type="number"
                                      min="0"
                                      name={fieldName}
                                      value={Number(
                                        ingredient.value[fieldName]
                                      ).toString()}
                                      disabled={fieldName !== "Вес"}
                                      onChange={(e) =>
                                        handleWeightChange(
                                          categoryIndex,
                                          ingredientIndex,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </td>
                                )
                              )}
                            </tr>
                          )
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </main>
      <div className="ration-for-pk__button">
        <Button onClick={post} text={"Продолжить"} />
      </div>
    </>
  );
}
