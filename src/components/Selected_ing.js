import { useEffect, useState } from "react";
import Arrow from '../style/img/Arrow.png';

function SelectedIngredients(props) {
    const [selectedIngredients, setSelectedIngredients] = useState({});
    const [expandedCategories, setExpandedCategories] = useState({});

    // Функция для переключения развернутости категории
    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    // Функция для фильтрации отмеченных ингредиентов и подкатегорий
    function filterSelectedIngredients() {
        const filteredIngredients = {};
        Object.entries(props.checkedCategories).forEach(([categoryName, categoryData]) => {
            // Проверяем, отмечена ли категория или хотя бы одна подкатегория
            const hasCheckedSubCategory = Object.values(categoryData.subCategorys).some(subData => subData.checked);

            if (categoryData.checked || hasCheckedSubCategory) {
                filteredIngredients[categoryName] = { ...categoryData, subCategorys: {} };

                // Добавляем только отмеченные подкатегории
                Object.entries(categoryData.subCategorys).forEach(([subName, subData]) => {
                    if (subData.checked) {
                        filteredIngredients[categoryName].subCategorys[subName] = subData;
                    }
                });
            }
        });
        setSelectedIngredients(filteredIngredients);
    }

    // Эффект для фильтрации ингредиентов при изменении checkedCategories
    useEffect(() => {
        filterSelectedIngredients();
    }, [props.checkedCategories]);

    // Проверка наличия неотмеченных подкатегорий
    const hasUncheckedSubCategories = (categoryName) => {
        const categoryData = props.checkedCategories[categoryName];

        // Проверяем, есть ли неотмеченные подкатегории
        return Object.values(categoryData.subCategorys).some(sub => !sub.checked);
    };

    return (
        <div className="selected-ingredients">
            {/* Заголовок секции с выбранными ингредиентами */}
            <div className="selected-ingredients__title">Выбранные ингредиенты</div>
            <div className="selected-ingredients__line"></div>

            {/* Проверяем, есть ли выбранные ингредиенты */}
            {Object.keys(selectedIngredients).length > 0 ? (
                props.ingredients.map((item, index) => {
                    // Проверяем, есть ли выбранные ингредиенты для текущей категории
                    if (selectedIngredients[item]) {
                        return (
                            <div key={index} className="ingredients-block__category">
                                <div className="ingredients-block__main-subblock">
                                    {/* Чекбокс для главной категории */}
                                    <div className="ingredients-block__text-checkbox">
                                        <input
                                            type="checkbox"
                                            className={`${hasUncheckedSubCategories(item) ? "dot" : "ingredients-block__checkbox"}`}
                                            checked={true} // Отмечаем как выбранный
                                            readOnly
                                        />
                                        <div className="ingredients-block__text">{item}</div>
                                    </div>

                                    {/* Кнопка для развертывания подкатегорий */}
                                    {Array.isArray(props.ingredients[index + 1]) ? (
                                        <img
                                            src={Arrow}
                                            alt="arrow"
                                            className={`ingredients-block__img ${expandedCategories[item] ? 'ingredients-block__img_rotate' : ''}`}
                                            onClick={() => toggleCategory(item)} // Переключение категории
                                        />
                                    ) : null}
                                </div>

                                {/* Развёрнутые подкатегории */}
                                {expandedCategories[item] && (
                                    <div className="ingredients-block__subblock subblock-category">
                                        {Object.keys(selectedIngredients[item].subCategorys).map((subItem, subIndex) => (
                                            selectedIngredients[item].subCategorys[subItem]?.checked && (
                                                <div key={subIndex} className="subblock-category__subcategory-block">
                                                    {/* Чекбокс для подкатегории */}
                                                    <input
                                                        type="checkbox"
                                                        className="subblock-category__checkbox"
                                                        checked={selectedIngredients[item].subCategorys[subItem]?.checked}
                                                        readOnly
                                                    />
                                                    <div className="subblock-category__text">{subItem}</div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return null; // Если нет выбранных ингредиентов, возвращаем null
                })
            ) : (
                // Сообщение, если ничего не выбрано
                <div className="selected-ingredients__invisible">
                    <div className="selected-ingredients__text">Ничего не выбрано</div>
                </div>
            )}
            <div className="selected-ingredients__line"></div>
        </div>
    );
}

export default SelectedIngredients;
