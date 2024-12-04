import './style/App.css';
import Header from './components/Header';
import Arrow from './style/img/Arrow.png';
import { useState, useEffect } from 'react';
import SelectedIng from './components/Selected_ing';

function App() {
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

  // Инициализация состояния checkedCategories
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

  console.log(filterIngredients());


  return (
    <div className="App">
      <Header />
      <div className="big-title">ОГРАНИЧЕНИЯ по ингредиентам</div>
      <main>
        <div className="wrapper">
          <div className="choise-block">
            <input
              type="text"
              className="choise-block__search"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="choise-block__ingredients ingredients-block">
              {filterIngredients().map((item, index) => {
                if (typeof item === 'string') {
                  return (
                    <div key={index} className="ingredients-block__category">
                      <div className="ingredients-block__main-subblock">
                        <div className="ingredients-block__text-checkbox" onClick={() => toggleCategoryCheck(item)}>
                          <input
                            type="checkbox"
                            className="ingredients-block__checkbox"
                            checked={checkedCategories[item]?.checked || false}
                            onChange={() => toggleCategoryCheck(item)}
                          />
                          <div className="ingredients-block__text">{item}</div>
                        </div>
                        {Array.isArray(ingredients[ingredients.indexOf(item) + 1]) ? (
                          <img
                            src={Arrow}
                            alt="arrow"
                            className={`ingredients-block__img ${expandedCategories[item] ? 'ingredients-block__img_rotate' : ''}`}
                            onClick={() => toggleCategory(item)}
                          />
                        ) : null}
                      </div>
                      {expandedCategories[item] && Array.isArray(ingredients[ingredients.indexOf(item) + 1]) && (
                        <div className="ingredients-block__subblock subblock-category">
                          {ingredients[ingredients.indexOf(item) + 1].map((subItem, subIndex) => (
                            <div key={subIndex} className="subblock-category__subcategory-block">
                              <input
                                type="checkbox"
                                className="subblock-category__checkbox"
                                checked={checkedCategories[item]?.subCategorys[subItem]?.checked || false}
                                onChange={() => toggleSubCategory(item, subItem)}
                              />
                              <div className="subblock-category__text">{subItem}</div>
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
            <div className="choise-block__line"></div>
            <div className="ingredient-add">
              <input
                className="ingredient-add__input"
                value={addIng}
                onChange={(e) => setAddIng(e.target.value)}
              />
              <div
                className="choise-block__add-ingredient ingredient-add"
                onClick={() => {
                  addCategory(addIng);
                  setAddIng("");
                }}
              >
                <div className="ingredient-add__checkbox"></div>
                <div className="ingredient-add__text">Добавить ингредиент</div>
              </div>
            </div>
          </div>
          <SelectedIng ingredients={ingredients} checkedCategories={checkedCategories} />
        </div>
      </main>
    </div>
  );

}

export default App;
