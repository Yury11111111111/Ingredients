export default function SozdanieIngredientOgranich() {
    return (
        <>
            <nav>
        <div className="extra-block">
            <div className="menu">
                <div className="menu__title logo-block">
                    <span className="logo-block__text">Taste</span>
                </div>
                <div className="menu__title">
                    <a href="" className="menu__link" tabindex = "1">Главная</a>
                </div>
                <div className="menu__title">
                    <a href="" className="menu__link" tabindex = "2">Архив</a>
                </div>
                <div className="menu__title">
                    <a href="" className="menu__link" tabindex = "3">Редактор</a>
                </div>
                <div className="menu__title">
                    <a href="" className="menu__link" tabindex = "4">Профиль</a>
                </div>
                <img src="{% static 'img/question.svg' %}" alt="" className="menu__img menu__img_margin-88"/>
            </div>
        </div>
        <div className="page-name">
            <div className="food-restrictions__title">Новое ограничение</div>
        </div>
    </nav>
    <main>
        <div className="wrapper">
                <div className="food-restrictions">
                    <input type="text" className="food-restrictions__string" placeholder="Название ограничения"/>
                    <div className="food-restrictions__title2">Ограничения по ингредиентам</div>
                </div>
                <div className="prohibited-ingredients">
                    <div className="choise-block">
                        <span className="prohibited-ingredients__ingredients2">Запрещённые ингредиенты:</span>
                        <input type="text" className="food-restrictions__string2" placeholder="Поиск"/>
                        <div className="choise-block__ingredients ingredients-block">
                            <div className="ingredients-block__category">
                                <div className="ingredients-block__main-subblock">
                                    <div className="ingredients-block__text-checkbox Ch">
                                        <input type="checkbox" className="ingredients-block__checkbox"/>
                                        <div type="checkbox" className="ingredients-block__text">Грибы</div>
                                    </div>
                                    <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                </div>
                                <div className="ingredients-block__subblock subblock-category">
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Грибы приморские</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Грибы Отморские</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Грибы заморские</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredients-block__category">
                                <div className="ingredients-block__main-subblock">
                                    <div className="ingredients-block__text-checkbox Ch">
                                        <input type="checkbox" className="ingredients-block__checkbox"/>
                                        <div type="checkbox" className="ingredients-block__text">Овощи</div>
                                    </div>
                                    <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                </div>
                                <div className="ingredients-block__subblock subblock-category">
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Помидор</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Огурец</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Кабачок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredients-block__category">
                                <div className="ingredients-block__main-subblock">
                                    <div className="ingredients-block__text-checkbox Ch">
                                        <input type="checkbox" className="ingredients-block__checkbox"/>
                                        <div type="checkbox" className="ingredients-block__text">Мясо</div>
                                    </div>
                                    <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                </div>
                                <div className="ingredients-block__subblock subblock-category">
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Жирное</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Хрупкое</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Заморское</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredients-block__category">
                                <div className="ingredients-block__main-subblock">
                                    <div className="ingredients-block__text-checkbox Ch">
                                        <input type="checkbox" className="ingredients-block__checkbox"/>
                                        <div type="checkbox" className="ingredients-block__text">Оливки</div>
                                    </div>
                                    <img src="{% static '/img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                </div>
                                <div className="ingredients-block__subblock subblock-category">
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Оливки японские</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Оливки Отморские</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Оливки заморские</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Оливки еврейские</div>
                                    </div>
                                    <div className="subblock-category__subcategory-block Ch">
                                        <input type="checkbox" className="subblock-category__checkbox"/>
                                        <div type="checkbox" className="subblock-category__text">Оливки пируанские</div>
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
        </div>
        </main>
        </>
    );
}