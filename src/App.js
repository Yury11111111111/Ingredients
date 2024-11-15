// Импортируем стили, заголовок и изображение стрелки
import './style/App.css';
import Header from './components/Header';
import Arrow from './style/img/Arrow.png';
import { useState } from 'react';

function App() {
  // Массив ингредиентов с категориями и подкатегориями
  const [ingredients, SetIngridients] = useState([
    "Грибы", ["Грибы приморские", "Грибы Отморские", "Грибы заморские"],
    "Овощи", ["Помидор", "Огурец", "Кабачок"],
    "Мясо", ["Жирное", "Хрупкое", "Заморское"],
    "Оливки", ["Оливки японские", "Оливки Отморские", "Оливки заморские", "Оливки еврейские", "Оливки пируанские"]
  ]);

  // Состояния для развернутых и отмеченных категорий
  const [expandedCategories, setExpandedCategories] = useState({});
  const [checkedCategories, setCheckedCategories] = useState({});

  // Переключение развернутости категории
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Переключение отметки категории и подкатегорий
  const toggleCategoryCheck = (category) => {
    const isChecked = !checkedCategories[category];
    setCheckedCategories(prev => ({
      ...prev,
      [category]: isChecked,
      ...ingredients[ingredients.indexOf(category) + 1].reduce((acc, subItem) => {
        acc[subItem] = isChecked;
        return acc;
      }, {})
    }));
  };

  // Переключение отметки подкатегории
  const toggleSubCategory = (subCategory) => {
    setCheckedCategories(prev => ({
      ...prev,
      [subCategory]: !prev[subCategory],
    }));
  };

  return (
    <div className="App">
      <Header /> 
      <div class="big-title">ОГРАНИЧЕНИЯ по ингредиентам</div>
      <main>
        <div class="wrapper">
          <div name="newRacionForm" method="post" class="main-form" action="restriction/table" id="newRacionForm">
            <div class="choise-block">
              <input type="text" class="choise-block__search" placeholder="Поиск" />
              <div className="choise-block__ingredients ingredients-block">
                {ingredients.map((item, index) => {
                  if (typeof item === 'string') { // Проверка являеться ли категорией
                    return (
                      <div key={index} className="ingredients-block__category">
                        <div className="ingredients-block__main-subblock">
                          <div className="ingredients-block__text-checkbox" onClick={() => toggleCategoryCheck(item)}>
                            <input
                              type="checkbox"
                              className="ingredients-block__checkbox"
                              checked={checkedCategories[item] || false}
                              onChange={() => toggleCategoryCheck(item)} // Обрабатываем изменение состояния чекбокса
                            />
                            <div className="ingredients-block__text">{item}</div>
                          </div>
                          <img
                            src={Arrow}
                            alt="arrow"
                            className="ingredients-block__img"
                            onClick={() => toggleCategory(item)} // Разворачиваем категорию
                          />
                        </div>
                        {expandedCategories[item] && ( // Если категория развернута
                          <div className="ingredients-block__subblock subblock-category">
                            {ingredients[index + 1].map((subItem, subIndex) => ( // Подкатегории
                              <div key={subIndex} className="subblock-category__subcategory-block">
                                <input
                                  type="checkbox"
                                  className="subblock-category__checkbox"
                                  checked={checkedCategories[subItem] || false}
                                  onChange={() => toggleSubCategory(subItem)} // Отметка подкатегории
                                />
                                <div className="subblock-category__text">{subItem}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null; // Если не категория, ничего не отображаем
                })}
              </div>
              {/* Это тоже можно в отдельный компонент, поэтому пусть будет todo */}
              <div class="choise-block__line"></div>
              <div class="choise-block__add-ingredient ingredient-add">
                <a href="#"><div class="ingredient-add__checkbox"></div></a>
                <div class="ingredient-add__text">Добавить ингредиент</div>
              </div>
            </div>
            <div class="selected-ingredients">
              <div class="selected-ingredients__title">выбранные ингредиенты</div>
              <div class="selected-ingredients__line"></div>
              <div class="selected-ingredients__invisible">
                <div class="selected-ingredients__text">Ничего не выбрано</div>
              </div>
              <div class="selected-ingredients__line"></div>
            </div>
            <div class="submit-block">
              <form action="javascript:history.back()">
                <button class="button">Сохранить</button> 
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
