import React, { useState, useEffect } from "react";
import "./CreatingRation.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import blackCross from "../../style/img/black_cross.png";
import pencil from "../../style/img/pencil.png";
import Arrow from "../../style/img/Arrow.png";

export default function CreatingRation() {
  const navigate = useNavigate();

  const [defaultTotalValues] = useState({
    Вес: 0,
    Вода: 0,
    Бел: 0,
    Жир: 0,
    НЖК: 0,
    Хол: 0,
    МДС: 0,
    Кр: 0,
    Угл: 0,
    ПВ: 0,
    ОК: 0,
    Зола: 0,
    Na: 0,
    K: 0,
    Ca: 0,
    Mg: 0,
    P: 0,
    Fe: 0,
    A: 0,
    Кар: 0,
    РЭ: 0,
    ТЭ: 0,
    B1: 0,
    B2: 0,
    PP: 0,
    НЭ: 0,
    C: 0,
    ЭЦ: 0,
    ПНЖК: 0,
  });

  const [defaultValues] = useState({
    Вес: 100,
    Вода: 88.3,
    Бел: 2.8,
    Жир: 2.5,
    НЖК: 1.5,
    Хол: 8,
    МДС: 4.7,
    Кр: 0.2,
    Угл: 4.7,
    ПВ: 0.1,
    ОК: 0.1,
    Зола: 0.7,
    Na: 50,
    K: 146,
    Ca: 120,
    Mg: 14,
    P: 95,
    Fe: 0.1,
    A: 0.022,
    Кар: 0.01,
    РЭ: 25,
    ТЭ: 0.09,
    B1: 0.04,
    B2: 0.15,
    PP: 0.8,
    НЭ: 1.8,
    C: 1.3,
    ЭЦ: 52,
    ПНЖК: 0.2,
  });

  const [days, setDays] = useState([
    {
      id: 1,
      name: "День 1",
      date: "1.06.2021г",
      total: { ...defaultTotalValues },
      day_pk: [
        { id: 1, name: "ПК1", value: { ...defaultValues } },
        { id: 2, name: "ПК2", value: { ...defaultValues } },
        { id: 3, name: "ПК3", value: { ...defaultValues } },
        { id: 4, name: "ПК4", value: { ...defaultValues } },
      ],
    },
    {
      id: 2,
      name: "День 2",
      date: "2.06.2021г",
      total: { ...defaultTotalValues },
      day_pk: [
        { id: 1, name: "ПК1", value: { ...defaultValues } },
        { id: 2, name: "ПК2", value: { ...defaultValues } },
        { id: 3, name: "ПК3", value: { ...defaultValues } },
        { id: 4, name: "ПК4", value: { ...defaultValues } },
      ],
    },
  ]);

  const handleDeletePk = (dayId, pkId) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              day_pk: day.day_pk.filter((pk) => pk.id !== pkId),
              total: calculateDayTotal(
                day.day_pk.filter((pk) => pk.id !== pkId)
              ),
            }
          : day
      )
    );
  };

  const calculateDayTotal = (dayPk) => {
    const newTotal = { ...defaultTotalValues };
    dayPk.forEach((pk) => {
      Object.keys(pk.value).forEach((nutrient) => {
        newTotal[nutrient] += pk.value[nutrient];
      });
    });
    return newTotal;
  };

  const handleAddPk = (dayId) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              total: calculateDayTotal(day.day_pk),
              day_pk: [
                ...day.day_pk,
                {
                  id:
                    day.day_pk.length > 0
                      ? Math.max(...day.day_pk.map((pk) => pk.id)) + 1
                      : 1,
                  name: `ПК${
                    day.day_pk.length > 0
                      ? Math.max(...day.day_pk.map((pk) => pk.id)) + 1
                      : 1
                  }`,
                  value: { ...defaultValues },
                },
              ],
            }
          : day
      )
    );
  };

  useEffect(() => {
    setDays((prevDays) =>
      prevDays.map((day) => ({
        ...day,
        total: calculateDayTotal(day.day_pk),
      }))
    );
  }, [days]);

  const post = () => {
    navigate("/CreatingPk");
  };

  return (
    <>
      <main className="ration__main">
        <div className="ration__wrapper">
          <form
            name="newRacionForm"
            method="post"
            className="ration__form"
            action="/pk"
            id="newRacionForm"
          >
            <div className="ration__table-container">
              <div className="ration__scroll-container">
                <table className="ration__table">
                  <thead>
                    <tr className="ration__title-row">
                      <th
                        rowSpan={2}
                        className="ration__title-cell ration__title-cell_main"
                      >
                        Ингредиенты
                      </th>
                      <th
                        colSpan={Object.keys(defaultTotalValues).length}
                        className="ration__title-cell ration__title-cell_main"
                      >
                        Нутриенты
                      </th>
                    </tr>
                    <tr>
                      {Object.keys(defaultTotalValues).map((field) => (
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
                    {days.map((day) => (
                      <React.Fragment key={`day-${day.id}`}>
                        <tr className="ration__category-row">
                          <td
                            colSpan={Object.keys(defaultTotalValues).length + 1}
                            className="ration__category"
                          >
                            {day.name} {day.date}
                          </td>
                        </tr>

                        {day.day_pk.map((pk) => (
                          <tr
                            key={`pk-${day.id}-${pk.id}`}
                            className="ration__ingredient-row"
                          >
                            <td className="ration__ingredient">
                              <div className="ration__ingredient-name">
                                <img
                                  src={pencil}
                                  alt="Изменить"
                                  className="reation__ingredient-pencil"
                                />
                                {pk.name}
                              </div>
                              <img
                                src={blackCross}
                                alt="Удалить"
                                className="ration_ingredient-cross"
                                onClick={() => handleDeletePk(day.id, pk.id)}
                                style={{ cursor: "pointer" }}
                              />
                            </td>
                            {Object.keys(pk.value).map((fieldName) => (
                              <td key={`${day.id}-${pk.id}-${fieldName}`}>
                                <input
                                  type="number"
                                  min="0"
                                  name={fieldName}
                                  value={Number(pk.value[fieldName]).toString()}
                                  disabled={true}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}

                        <tr>
                          <td className="ration__ingredient">
                            <div
                              className="ration__ingredient-name"
                              onClick={() => handleAddPk(day.id)}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={Arrow}
                                alt="add"
                                className="ration__ingredient-arrow"
                              />
                              <div>Добавить</div>
                            </div>
                            <div className="ration__ingredient-empty-space"></div>
                          </td>
                          {Object.keys(defaultTotalValues).map((nutrient) => (
                            <td key={`add-${day.id}-${nutrient}`}>
                              <input
                                type="number"
                                min="0"
                                name={nutrient}
                                value={0}
                                disabled={true}
                              />
                            </td>
                          ))}
                        </tr>

                        <tr>
                          <td className="ration__ingredient">
                            <div className="ration__ingredient-empty-space"></div>
                            <div className="ration__ingredient-name">
                              Итого:
                            </div>
                          </td>
                          {Object.keys(day.total).map((nutrient) => (
                            <td key={`total-${day.id}-${nutrient}`}>
                              <input
                                type="number"
                                min="0"
                                name={nutrient}
                                value={Number(day.total[nutrient]).toString()}
                                disabled={true}
                              />
                            </td>
                          ))}
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </main>
      <div className="ration__button">
        <Button onClick={post} text={"Продолжить"} />
      </div>
    </>
  );
}
