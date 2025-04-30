import Header from "../../components/Header/Header";
import "./CreatingIngredientRestriction.css"

export default function CreatingIngredientRestriction() {
  return (
    <>
      <Header/>
      <main>
        <div className="wrapper">
          <form>
            <div className="food-restrictions">
              <input
                type="text"
                className="food-restrictions__string"
                placeholder="Название ограничения"
              />
              <div className="food-restrictions__title">
                Ограничения по ингредиентам
              </div>
            </div>
            <div className="prohibited-ingredients">
              <span className="prohibited-ingredients__ingredients">
                ИНГРЕДИЕНТ ИЛИ КАТЕГОРИЯ ИНГРЕДИЕНТОВ
              </span>
              <select
                name="username"
                className="prohibited-ingredients__choice"
              >
                <option value="title" className="prohibited-ingredients__point">
                  Название ингредиента/категории
                </option>
                <option value="1" className="prohibited-ingredients__point">
                  Молоко
                </option>
                <option value="2" className="prohibited-ingredients__point">
                  Оливки
                </option>
                <option value="3" className="prohibited-ingredients__point">
                  Грибы
                </option>
              </select>
              <div className="choise-block">
                <span className="prohibited-ingredients__ingredients2">
                  Запрещённые ингредиенты:
                </span>
                <div className="choise-block__ingredients ingredients-block">
                  <div className="ingredients-block__category">
                    <div className="ingredients-block__main-subblock">
                      <div className="ingredients-block__text-checkbox">
                        <input
                          type="checkbox"
                          className="ingredients-block__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="ingredients-block__text"
                        >
                          Грибы
                        </div>
                      </div>
                      <img
                        src="{% static 'img/Arrow.png' %}"
                        alt="arrow"
                        className="ingredients-block__img"
                      />
                    </div>
                    <div className="ingredients-block__subblock subblock-category">
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Грибы приморские
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Грибы Отморские
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Грибы заморские
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ingredients-block__category">
                    <div className="ingredients-block__main-subblock">
                      <div className="ingredients-block__text-checkbox">
                        <input
                          type="checkbox"
                          className="ingredients-block__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="ingredients-block__text"
                        >
                          Овощи
                        </div>
                      </div>
                      <img
                        src="{% static 'img/Arrow.png' %}"
                        alt="arrow"
                        className="ingredients-block__img"
                      />
                    </div>
                    <div className="ingredients-block__subblock subblock-category">
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          ПОмидор
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Огурец
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Кабачок
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ingredients-block__category">
                    <div className="ingredients-block__main-subblock">
                      <div className="ingredients-block__text-checkbox">
                        <input
                          type="checkbox"
                          className="ingredients-block__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="ingredients-block__text"
                        >
                          Мясо
                        </div>
                      </div>
                      <img
                        src="{% static 'img/Arrow.png' %}"
                        alt="arrow"
                        className="ingredients-block__img"
                      />
                    </div>
                    <div className="ingredients-block__subblock subblock-category">
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Жирное
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Хрупкое
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Заморское
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ingredients-block__category">
                    <div className="ingredients-block__main-subblock">
                      <div className="ingredients-block__text-checkbox">
                        <input
                          type="checkbox"
                          className="ingredients-block__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="ingredients-block__text"
                        >
                          Оливки
                        </div>
                      </div>
                      <img
                        src="{% static 'img/Arrow.png' %}"
                        alt="arrow"
                        className="ingredients-block__img"
                      />
                    </div>
                    <div className="ingredients-block__subblock subblock-category">
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Оливки японские
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Оливки Отморские
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Оливки заморские
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Оливки еврейские
                        </div>
                      </div>
                      <div className="subblock-category__subcategory-block">
                        <input
                          type="checkbox"
                          className="subblock-category__checkbox"
                        />
                        <div
                          type="checkbox"
                          className="subblock-category__text"
                        >
                          Оливки пируанские
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button name="button" className="button button__text">
                Готово
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
