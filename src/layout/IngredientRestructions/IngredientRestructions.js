import Header from '../../components/Header/Header';
import Arrow from '../../style/img/Arrow.png';
import { useState, useEffect } from 'react';
import SelectedIngredients from '../../components/SelectedIngredients/SelectedIngredients';
import "./IngredientRestructions.css";

export default function IngredientRestructions() {
  const [ingredients, setIngredients] = useState([
    "Грибы", ["Грибы приморские", "Грибы Отморские", "Грибы заморские"],
    "Овощи", ["Помидор", "Огурец", "Кабачок"],
    "Мясо", ["Жирное", "Хрупкое", "Заморское"],
    "Оливки", ["Оливки японские", "Оливки Отморские", "Оливки заморские", "Оливки еврейские", "Оливки пируанские"]
  ]);

  const [expandedCategories, setExpandedCategories] = useState({});
  const [checkedCategories, setCheckedCategories] = useState({});
  const [addIng, setAddIng] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fill = () => {
    setCheckedCategories({});
    ingredients.forEach(ing => {
      if (typeof ing === 'string') {
        let nextIngredient = ingredients[ingredients.indexOf(ing) + 1];

        setCheckedCategories((prev) => ({
          ...prev,
          [ing]: {
            checked: false,
            subCategorys: Array.isArray(nextIngredient) ?
              Object.fromEntries(nextIngredient.map(next =>
                [next, { checked: false }]
              )) : {}
          }
        }));
      }
    });
  }

  useEffect(() => {
    fill();
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleCategoryCheck = (category) => {
    setCheckedCategories(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        checked: !checkedCategories[category].checked,
        subCategorys: checkedCategories[category].subCategorys ? Object.fromEntries(
          Object.entries(prev[category].subCategorys).map(([subCategory, subData]) => [
            subCategory,
            { ...subData, checked: !checkedCategories[category].checked }
          ])
        ) : {}
      }
    }));
  };

  const toggleSubCategory = (category, subCategory) => {
    setCheckedCategories(prev => {
      const currentCategory = prev[category];
      const updatedSubCategories = {
        ...currentCategory.subCategorys,
        [subCategory]: {
          checked: !currentCategory.subCategorys[subCategory].checked
        }
      };

      const allChecked = Object.values(updatedSubCategories).every(sub => sub.checked);

      return {
        ...prev,
        [category]: {
          ...currentCategory,
          checked: allChecked,
          subCategorys: updatedSubCategories
        }
      };
    });
  };

  const addCategory = (categoryName) => {
    setIngredients([...ingredients, categoryName]);
    setCheckedCategories((prev) => ({
      ...prev,
      [categoryName]: {
        checked: false,
        subCategorys: {}
      }
    }));
  }

  const filterIngredients = () => {
    return ingredients.reduce((acc, item, index) => {
      if (typeof item === 'string') {
        const nextIndex = index + 1;
        const subCategories = Array.isArray(ingredients[nextIndex]) ? ingredients[nextIndex] : [];

        const isCategoryMatch = item.toLowerCase().includes(searchQuery.toLowerCase());
        const filteredSubCategories = subCategories.filter(subItem =>
          subItem.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (isCategoryMatch) {
          acc.push(item);
        } 
        if (filteredSubCategories.length === 1) {
          acc.push(filteredSubCategories[0]);
        } 
        if (filteredSubCategories.length > 1) {
          acc.push(filteredSubCategories);
        }
      }
      return acc;
    }, []);
  };

  return (
    <div className="ing-restriction">
      <Header />
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
              {filterIngredients().map((item, index) => {
                if (typeof item === 'string') {
                  return (
                    <div key={index} className="ing-restriction__category">
                      <div className="ing-restriction__category-header">
                        <div 
                          className="ing-restriction__category-control"
                          onClick={() => toggleCategoryCheck(item)}
                        >
                          <input
                            type="checkbox"
                            className="ing-restriction__category-checkbox"
                            checked={checkedCategories[item]?.checked || false}
                            onChange={() => toggleCategoryCheck(item)}
                          />
                          <span className="ing-restriction__category-name">{item}</span>
                        </div>
                        {Array.isArray(ingredients[ingredients.indexOf(item) + 1]) ? (
                          <img
                            src={Arrow}
                            alt="arrow"
                            className={`ing-restriction__category-arrow ${expandedCategories[item] ? 'ing-restriction__category-arrow_rotated' : ''}`}
                            onClick={() => toggleCategory(item)}
                          />
                        ) : null}
                      </div>
                      {expandedCategories[item] && Array.isArray(ingredients[ingredients.indexOf(item) + 1]) && (
                        <div className="ing-restriction__subcategories">
                          {ingredients[ingredients.indexOf(item) + 1].map((subItem, subIndex) => (
                            <div key={subIndex} className="ing-restriction__subcategory">
                              <input
                                type="checkbox"
                                className="ing-restriction__subcategory-checkbox"
                                checked={checkedCategories[item]?.subCategorys[subItem]?.checked || false}
                                onChange={() => toggleSubCategory(item, subItem)}
                              />
                              <span className="ing-restriction__subcategory-name">{subItem}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="ing-restriction__divider"></div>
            
          </div>
          <SelectedIngredients 
            ingredients={ingredients} 
            checkedCategories={checkedCategories} 
            className="ing-restriction__selected-ingredients"
          />
        </div>
      </main>
    </div>
  );
}