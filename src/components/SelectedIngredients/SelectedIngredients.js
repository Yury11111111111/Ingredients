import { useEffect, useState } from "react";
import Arrow from "../../style/img/Arrow.png";
import "./SelectedIngredients.css";

function SelectedIngredients(props) {
  const [selectedIngredients, setSelectedIngredients] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  function filterSelectedIngredients() {
    const filteredIngredients = {};
    Object.entries(props.checkedCategories).forEach(
      ([categoryName, categoryData]) => {
        const hasCheckedSubCategory = Object.values(
          categoryData.subCategorys
        ).some((subData) => subData.checked);

        if (categoryData.checked || hasCheckedSubCategory) {
          filteredIngredients[categoryName] = {
            ...categoryData,
            subCategorys: {},
          };

          Object.entries(categoryData.subCategorys).forEach(
            ([subName, subData]) => {
              if (subData.checked) {
                filteredIngredients[categoryName].subCategorys[subName] =
                  subData;
              }
            }
          );
        }
      }
    );
    setSelectedIngredients(filteredIngredients);
  }

  useEffect(() => {
    filterSelectedIngredients();
  }, [props.checkedCategories]);

  const hasUncheckedSubCategories = (categoryName) => {
    const categoryData = props.checkedCategories[categoryName];
    return Object.values(categoryData.subCategorys).some((sub) => !sub.checked);
  };

  return (
    <div className="selected-ingredients">
      <div className="selected-ingredients__title">Выбранные ингредиенты</div>
      <div className="selected-ingredients__divider"></div>

      {Object.keys(selectedIngredients).length > 0 ? (
        props.ingredients.map((item, index) => {
          if (selectedIngredients[item]) {
            return (
              <div key={index} className="selected-ingredients__category">
                <div className="selected-ingredients__category-header">
                  <div className="selected-ingredients__category-control">
                    <input
                      type="checkbox"
                      className={`selected-ingredients__checkbox ${
                        hasUncheckedSubCategories(item)
                          ? "selected-ingredients__checkbox_partial"
                          : ""
                      }`}
                      checked={true}
                      readOnly
                    />
                    <span className="selected-ingredients__category-name">{item}</span>
                  </div>

                  {Array.isArray(props.ingredients[index + 1]) && (
                    <img
                      src={Arrow}
                      alt="arrow"
                      className={`selected-ingredients__arrow ${
                        expandedCategories[item] 
                          ? "selected-ingredients__arrow_rotated" 
                          : ""
                      }`}
                      onClick={() => toggleCategory(item)}
                    />
                  )}
                </div>

                {expandedCategories[item] && (
                  <div className="selected-ingredients__subcategories">
                    {Object.keys(selectedIngredients[item].subCategorys).map(
                      (subItem, subIndex) =>
                        selectedIngredients[item].subCategorys[subItem]
                          ?.checked && (
                          <div
                            key={subIndex}
                            className="selected-ingredients__subcategory"
                          >
                            <input
                              type="checkbox"
                              className="selected-ingredients__subcategory-checkbox"
                              checked={
                                selectedIngredients[item].subCategorys[subItem]
                                  ?.checked
                              }
                              readOnly
                            />
                            <span className="selected-ingredients__subcategory-name">
                              {subItem}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })
      ) : (
        <div className="selected-ingredients__empty">
          <span className="selected-ingredients__empty-text">Ничего не выбрано</span>
        </div>
      )}
      <div className="selected-ingredients__divider"></div>
    </div>
  );
}

export default SelectedIngredients;