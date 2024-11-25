// Импортируем стили, заголовок и изображение стрелки
import Header from '../../components/Header';
import Arrow from '../../style/img/Arrow.png';
import { useState, useEffect } from 'react';
import SelectedIng from '../../components/Selected_ing';

function Home() {
  const [ingredients, setIngredients] = useState([
    "Грибы", ["Грибы приморские", "Грибы Отморские", "Грибы заморские"],
    "Овощи", ["Помидор", "Огурец", "Кабачок"],
    "Мясо", ["Жирное", "Хрупкое", "Заморское"],
    "Оливки", ["Оливки японские", "Оливки Отморские", "Оливки заморские", "Оливки еврейские", "Оливки пируанские"]
  ]);

  const [expandedCategories, setExpandedCategories] = useState({});
  const [checkedCategories, setCheckedCategories] = useState({});

  // Функция для инициализации состояния checkedCategories
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

  // Эффект для заполнения состояния при первом рендере
  useEffect(() => {
    fill();
  }, []);

  // Переключение развернутости категории
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Переключение отметки категории
  const toggleCategoryCheck = (category) => {
    setCheckedCategories(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        checked: !checkedCategories[category].checked,
        subCategorys: checkedCategories[category].subCategorys ? Object.fromEntries(
          Object.entries(prev[category].subCategorys).map(([subCategory, subData]) => [
            subCategory,
            { ...subData, checked: !checkedCategories[category].checked } // Устанавливаем состояние подкатегорий
          ])
        ) : {}
      }
    }));
  };

  // Переключение отметки подкатегории
  const toggleSubCategory = (category, subCategory) => {
    setCheckedCategories(prev => {
      const currentCategory = prev[category];
      const updatedSubCategories = {
        ...currentCategory.subCategorys,
        [subCategory]: {
          checked: !currentCategory.subCategorys[subCategory].checked
        }
      };

      // Проверяем, сколько подкатегорий отмечено
      const allChecked = Object.values(updatedSubCategories).every(sub => sub.checked);

      return {
        ...prev,
        [category]: {
          ...currentCategory,
          checked: allChecked, // Устанавливаем checked для родительской категории
          subCategorys: updatedSubCategories
        }
      };
    });
  };

  // Функция для добавления новой категории
  const addCategory = (categoryName) => {
    setIngredients([
      ...ingredients,
      categoryName
    ]);
    setCheckedCategories((prev) => ({
      ...prev,
      [categoryName]: {
        checked: false,
        subCategorys: {}
      }
    }));
  }

  return (
    <div className="Home">
      <Header />
      {/* Заголовок приложения */}
      <div className="big-title">ОГРАНИЧЕНИЯ по ингредиентам</div>
      <main>
        <div className="wrapper">
          <div className="choise-block">
            {/* Поле для поиска ингредиентов */}
            <input type="text" className="choise-block__search" placeholder="Поиск" />
            <div className="choise-block__ingredients ingredients-block">
              {ingredients.map((item, index) => {
                if (typeof item === 'string') {
                  return (
                    <div key={index} className="ingredients-block__category">
                      <div className="ingredients-block__main-subblock">
                        {/* Чекбокс для главной категории */}
                        <div className="ingredients-block__text-checkbox" onClick={() => toggleCategoryCheck(item)}>
                          <input
                            type="checkbox"
                            className="ingredients-block__checkbox"
                            checked={checkedCategories[item]?.checked || false}
                            onChange={() => toggleCategoryCheck(item)}
                          />
                          <div className="ingredients-block__text">{item}</div>
                        </div>
                        {/* Кнопка для развертывания подкатегорий */}
                        {Array.isArray(ingredients[index + 1]) ? (
                          <img
                            src={Arrow}
                            alt="arrow"
                            className={`ingredients-block__img ${expandedCategories[item] ? 'ingredients-block__img_rotate' : ''}`}
                            onClick={() => toggleCategory(item)} // Переключение категории
                          />
                        ) : null}
                      </div>
                      {/* Развёрнутые подкатегории */}
                      {expandedCategories[item] && Array.isArray(ingredients[index + 1]) && (
                        <div className="ingredients-block__subblock subblock-category">
                          {ingredients[index + 1].map((subItem, subIndex) => (
                            <div key={subIndex} className="subblock-category__subcategory-block">
                              {/* Чекбокс для подкатегории */}
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
                return null; // Если элемент не является строкой, возвращаем null
              })}
            </div>
            <div className="choise-block__line"></div>
            {/* Кнопка для добавления нового ингредиента */}
            <div
              className="choise-block__add-ingredient ingredient-add"
              onClick={() => addCategory("Суши")} // Добавление нового ингредиента
            >
              <div className="ingredient-add__checkbox"></div>
              <div className="ingredient-add__text">Добавить ингредиент</div>
            </div>
          </div>
          <SelectedIng ingredients={ingredients} checkedCategories={checkedCategories} />
        </div>
      </main>
    </div >
  );
}

export default Home;
