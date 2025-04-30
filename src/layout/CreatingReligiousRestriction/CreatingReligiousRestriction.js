import Header from "../../components/Header/Header";
import "./CreatingReligiousRestriction.css";

export default function CreatingReligiousRestriction() {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <div className="food-restrictions">
            <input
              type="text"
              className="food-restrictions__string"
              placeholder="Название ограничения"
            />
            <div className="food-restrictions__title2">
              Религиозные ограничения
            </div>
          </div>
          <div className="prohibited-ingredients">
            <div className="choise-block">
              <span className="prohibited-ingredients__ingredients2">
                Запрещённые ингредиенты:
              </span>
              <input
                type="text"
                className="food-restrictions__string2"
                placeholder="Поиск"
              />
              <div className="choise-block__ingredients ingredients-block">
                {renderIngredientCategory("Грибы", [
                  "Грибы приморские",
                  "Грибы Отморские",
                  "Грибы заморские",
                ])}
                {renderIngredientCategory("Овощи", [
                  "Помидор",
                  "Огурец",
                  "Кабачок",
                ])}
                {renderIngredientCategory("Мясо", [
                  "Жирное",
                  "Хрупкое",
                  "Заморское",
                ])}
                {renderIngredientCategory("Оливки", [
                  "Оливки японские",
                  "Оливки Отморские",
                  "Оливки заморские",
                  "Оливки еврейские",
                  "Оливки пируанские",
                ])}
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="actions__subblock">
              <div className="actions__time">Начало действия</div>
              <div className="actions__input-block">
                <input
                  type="checkbox"
                  className="actions__checkbox"
                  checked
                  name="check_2"
                />
                <input
                  type="date"
                  className="actions__date actions__date_margin-28"
                />
              </div>
              <div className="actions__time">Окончание действия</div>
              <div className="actions__input-block">
                <input
                  type="checkbox"
                  className="actions__checkbox"
                  checked
                  name="check_2"
                />
                <input type="date" className="actions__date" />
              </div>
            </div>
            <div className="actions__input-block">
              <input
                type="checkbox"
                className="actions__checkbox"
                checked
                name="check_2"
              />
              <div className="checkbox__text">Светлое время суток</div>
            </div>
            <div className="actions__input-block">
              <input
                type="checkbox"
                className="actions__checkbox"
                checked
                name="check_2"
              />
              <div className="checkbox__text">Тёмное время суток</div>
            </div>
          </div>
        </div>
        <div>
          <form action="prosmotr_vseh_ogr">
            <button name="button" className="button button__text">
              Готово
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

// Функция для рендеринга категорий ингредиентов
function renderIngredientCategory(category, subcategories) {
  return (
    <div className="ingredients-block__category">
      <div className="ingredients-block__main-subblock">
        <div className="ingredients-block__text-checkbox">
          <input type="checkbox" className="ingredients-block__checkbox" />
          <div className="ingredients-block__text">{category}</div>
        </div>
        <img
          src="{% static '/img/Arrow.png' %}"
          alt="arrow"
          className="ingredients-block__img"
        />
      </div>
      <div className="ingredients-block__subblock subblock-category">
        {subcategories.map((subcategory) => (
          <div
            className="subblock-category__subcategory-block"
            key={subcategory}
          >
            <input type="checkbox" className="subblock-category__checkbox" />
            <div className="subblock-category__text">{subcategory}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
