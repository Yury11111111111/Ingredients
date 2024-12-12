import Header from "../../components/Header"

export default function RedactDiet() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">
                    <div className="food-restrictions">
                        <a className="food-restrictions__title2" id="myLink">Ссылка</a>
                    </div>
                    <div className="food-restrictions2">
                        <input type="text" className="food-restrictions__string" placeholder="Название ограничения" />
                        <div className="actions__subblock">
                            <div className="actions__input-block">
                                <input type="checkbox" className="actions__checkbox" checked name="check_2" />
                                <input type="date" className="actions__date actions__date_margin-28" />
                            </div >
                            <div className="actions__time">Начало</div>
                        </div>
                        <div className="actions__subblock2">
                            <div className="actions__input-block">
                                <input type="checkbox" className="actions__checkbox" checked name="check_2" />
                                <input type="date" className="actions__date" />
                            </div >
                            <div className="actions__time2">Окончание</div>
                        </div >
                    </div>
                    <div className="a">
                        <img src="{% static '/img/Plus.png' %}" alt="" className="menu__img2" />
                        СВЯЗАННЫЕ ОГРАНИЧЕНИЯ:
                    </div>
                    <div className="prohibited-ingredients">
                        <div className="choise-block">
                            <div className="food-restrictions3">
                                <span className="prohibited-ingredients__ingredients2">Запрещённые ингредиенты:</span>
                                <input type="search" className="food-restrictions__string2" placeholder="Поиск" />
                            </div>
                            <div className="choise-block__ingredients ingredients-block">
                                <div className="ingredients-block__category">
                                    <div className="ingredients-block__main-subblock">
                                        <a className="Ch">
                                            <div className="ingredients-block__text-checkbox ">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Грибы</div>
                                            </div>

                                        </a>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img" />
                                    </div>
                                    <div className="ingredients-block__subblock subblock-category">
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Грибы приморские</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Грибы Отморские</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Грибы заморские</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="ingredients-block__category">
                                    <div className="ingredients-block__main-subblock">
                                        <a className="Ch">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Овощи</div>
                                            </div>
                                        </a>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img" />
                                    </div>
                                    <div className="ingredients-block__subblock subblock-category">
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Помидор</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Огурец</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Кабачок</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="ingredients-block__category">
                                    <div className="ingredients-block__main-subblock">
                                        <a className="Ch">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Мясо</div>
                                            </div>
                                        </a>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img" />
                                    </div>
                                    <div className="ingredients-block__subblock subblock-category">
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Жирное</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Хрупкое</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Заморское</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="ingredients-block__category">
                                    <div className="ingredients-block__main-subblock">
                                        <a className="Ch">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Оливки</div>
                                            </div>
                                        </a>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img" />
                                    </div>
                                    <div className="ingredients-block__subblock subblock-category">
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Оливки японские</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Оливки Отморские</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Оливки заморские</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Оливки еврейские</div>
                                            </div>
                                        </a>
                                        <a className="Ch">
                                            <div className="subblock-category__subcategory-block">
                                                <input type="checkbox" className="subblock-category__checkbox" />
                                                <div type="checkbox" className="subblock-category__text">Оливки пируанские</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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