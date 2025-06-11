import React, { useState, useEffect, useRef } from "react";
import "./CreatingRation.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import IngredientWindow from "../../components/IngredientWindow/IngredientWindow";
import { useNavigate } from "react-router-dom";
import blackCross from "../../style/img/black_cross.png";
import pencil from "../../style/img/pencil.png";
import Arrow from "../../style/img/Arrow.png";
import SelectWindow from "../../components/SelectWindow/SelectWindow";
import CompositionWindow from "../../components/CompositionWindow/CompositionWindow";

export default function CreatingRation() {
  const navigate = useNavigate();
  const rationName = localStorage.getItem("ration-name");

  const dropdownRef = useRef(null);
  const tableContainerRef = useRef(null);

  const [selectWindow, setSelectWindow] = useState({
    isOpen: false,
    dayId: 0,
    position: { top: 0, left: 0 },
  });

  const [ingredientWindow, setIngredientWindow] = useState({
    isOpen: false,
    dayId: 0,
    position: { top: 0, left: 0 },
  });

  const [compositionWindow, setCompositionWindow] = useState({
    isOpen: false,
    dayId: 0,
    position: { top: 0, left: 0 },
  });

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
        if (newTotal.hasOwnProperty(nutrient)) {
          newTotal[nutrient] += pk.value[nutrient];
        }
      });
    });
    return newTotal;
  };

  const toggleSelectWindow = (dayId, event) => {
    if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      const tableContainer = tableContainerRef.current;
      const containerScrollLeft = tableContainer
        ? tableContainer.scrollLeft
        : 0;

      setSelectWindow({
        isOpen: selectWindow.dayId === dayId ? false : true,
        dayId: selectWindow.dayId === dayId ? null : dayId,
        position: {
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        },
      });
      localStorage.setItem("newPK_dayId", String(dayId));
    } else {
      setSelectWindow({
        isOpen: false,
        dayId: 0,
        position: { top: 0, left: 0 },
      });
    }
    setIngredientWindow({
      isOpen: false,
      dayId: 0,
      position: { top: 0, left: 0 },
    });
    setCompositionWindow({
      isOpen: false,
      dayId: 0,
      position: { top: 0, left: 0 },
    });
  };

  const handlePkClick = (selectedOption) => {
    const type = String(selectedOption?.type || selectedOption || "")
      .trim()
      .toLowerCase();
    const triggerElement = document.querySelector(
      `[data-day-id="${selectWindow.dayId}"]`
    );

    const rect = triggerElement.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    if (type.includes("ингредиент")) {
      if (triggerElement) {
        setIngredientWindow({
          isOpen: true,
          dayId: selectWindow.dayId,
          position: {
            top: rect.bottom + scrollY,
            left: rect.left + scrollX,
          },
        });
      }
    } else if (type.includes("существующая")) {
      setCompositionWindow({
        isOpen: true,
        dayId: selectWindow.dayId,
        position: {
          top: rect.bottom + scrollY,
          left: rect.left + scrollX,
        },
      });
    } else if (type.includes("новая")) {
      localStorage.setItem("backToRation", "true");
      navigate("/CreatingPk");
    } else {
      console.warn("Неизвестный тип:", selectedOption);
    }
  };

  const handleIngredientSelect = (selectedIngredients, dayId) => {
    setDays((prevDays) => {
      return prevDays.map((day) => {
        if (day.id === dayId) {
          const filteredPks = day.day_pk.filter(
            (pk) => pk.isComposition !== false
          );

          const newPks = selectedIngredients.map((ingredient, index) => ({
            id: Math.max(0, ...filteredPks.map((pk) => pk.id)) + index + 1,
            name: ingredient.name,
            value: { ...defaultValues },
            added: true,
            isComposition: false,
          }));

          const updatedPks = [...filteredPks, ...newPks];

          return {
            ...day,
            day_pk: updatedPks,
            total: calculateDayTotal(updatedPks),
          };
        }
        return day;
      });
    });

    setIngredientWindow({
      isOpen: false,
      dayId: 0,
      position: { top: 0, left: 0 },
    });
  };

  const handleCompositionSelect = (selectedCompositions, dayId) => {
    setDays((prevDays) => {
      return prevDays.map((day) => {
        if (day.id === dayId) {
          const newPks = selectedCompositions.map((composition, index) => ({
            id: Math.max(0, ...day.day_pk.map((pk) => pk.id)) + index + 1,
            name: composition.name,
            value: { ...defaultValues },
            added: true,
            isComposition: true,
          }));

          const updatedPks = [...day.day_pk, ...newPks];
          return {
            ...day,
            day_pk: updatedPks,
            total: calculateDayTotal(updatedPks),
          };
        }
        return day;
      });
    });
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const processNewPK = () => {
      const newPKData = localStorage.getItem("newPK");
      const dayId = localStorage.getItem("newPK_dayId");

      if (newPKData && dayId) {
        try {
          const parsedPK = JSON.parse(newPKData);

          if (parsedPK?.name_pc) {
            handleCompositionSelect(
              [{ name: parsedPK.pk_name }],
              parseInt(dayId)
            );
            setReload(true);
          }
        } catch (e) {
          console.error("Error parsing new PK data", e);
        }
      }
    };

    const cleanupBeforeUnload = () => {
      localStorage.removeItem("newPK");
      localStorage.removeItem("newPK_dayId");
    };

    processNewPK();

    window.addEventListener("beforeunload", cleanupBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", cleanupBeforeUnload);
    };
  }, [reload]);

  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, []);

  useEffect(() => {
    const updatedDays = days.map((day) => ({
      ...day,
      total: calculateDayTotal(day.day_pk),
    }));

    if (JSON.stringify(updatedDays) !== JSON.stringify(days)) {
      setDays(updatedDays);
    }
  }, [days.day_pk]);

  const handleScroll = () => {
    setSelectWindow({ isOpen: false, dayId: 0, position: { top: 0, left: 0 } });
    setIngredientWindow({
      isOpen: false,
      dayId: 0,
      position: { top: 0, left: 0 },
    });
    setCompositionWindow({
      isOpen: false,
      dayId: 0,
      position: { top: 0, left: 0 },
    });
  };

  useEffect(() => {
    const tableContainer = document.querySelector(".ration__table-container");
    if (tableContainer) {
      tableContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tableContainer) {
        tableContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const post = () => {
    navigate("/MainTech");
  };

  return (
    <>
      <Header navName="navTech" pageTitle={rationName} />
      <main className="ration__main">
        <div className="ration__wrapper">
          <form
            name="newRacionForm"
            method="post"
            className="ration__form"
            action="/pk"
            id="newRacionForm"
          >
            <div className="ration__table-container" ref={tableContainerRef}>
              <table className="ration__table">
                <thead>
                  <tr className="ration__title-row">
                    <th
                      rowSpan={2}
                      className="ration__title-cell ration__title-cell_main ration__title-cell-nutrients"
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
                                className="ration__ingredient-pencil"
                              />
                              {pk.name}
                            </div>
                            <img
                              src={blackCross}
                              alt="Удалить"
                              className="ration__ingredient-cross"
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
                                value={parseFloat(
                                  pk.value[fieldName].toFixed(2)
                                )}
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
                            onClick={(e) => toggleSelectWindow(day.id, e)}
                            style={{ cursor: "pointer" }}
                            data-day-id={day.id}
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
                          <div className="ration__ingredient-name">Итого:</div>
                        </td>
                        {Object.keys(day.total).map((nutrient) => (
                          <td key={`total-${day.id}-${nutrient}`}>
                            <input
                              type="number"
                              min="0"
                              name={nutrient}
                              value={parseFloat(day.total[nutrient].toFixed(2))}
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
          </form>
        </div>
      </main>

      <SelectWindow
        isOpen={selectWindow.isOpen}
        position={selectWindow.position}
        dayId={selectWindow.dayId}
        onSelect={handlePkClick}
        onClose={() => setSelectWindow({ ...selectWindow, isOpen: false })}
        ref={dropdownRef}
      />

      <IngredientWindow
        isOpen={ingredientWindow.isOpen}
        position={ingredientWindow.position}
        dayId={ingredientWindow.dayId}
        onSelect={handleIngredientSelect}
        onClose={() => setIngredientWindow({ isOpen: false, dayId: 0 })}
      />

      <CompositionWindow
        isOpen={compositionWindow.isOpen}
        position={compositionWindow.position}
        dayId={compositionWindow.dayId}
        onSelect={handleCompositionSelect}
        onClose={() => {
          setCompositionWindow({
            isOpen: false,
            dayId: 0,
            position: { top: 0, left: 0 },
          });
        }}
      />

      <div className="ration__button">
        <Button onClick={post} text={"Продолжить"} />
      </div>
    </>
  );
}
