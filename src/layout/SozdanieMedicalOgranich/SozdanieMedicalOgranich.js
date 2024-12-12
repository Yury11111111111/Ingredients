export default function SozdanieMedicalOgranich() {
    return (
        <>
            <nav>
                <div class="extra-block">
                    <div class="menu">
                        <div class="menu__title logo-block">
                            <span class="logo-block__text">Taste</span>
                        </div>
                        <div class="menu__title">
                            <a href="" class="menu__link" tabindex="1">Главная</a>
                        </div>
                        <div class="menu__title">
                            <a href="" class="menu__link" tabindex="2">Архив</a>
                        </div>
                        <div class="menu__title">
                            <a href="" class="menu__link" tabindex="3">Редактор</a>
                        </div>
                        <div class="menu__title">
                            <a href="" class="menu__link" tabindex="4">Профиль</a>
                        </div>
                        <img src="{% static 'img/question.svg' %}" alt="" class="menu__img menu__img_margin-88" />
                    </div>
                </div>
                <div class="page-name">
                    <div class="food-restrictions__title">Новое ограничение</div>
                </div>
            </nav>
            <main>
                <div class="wrapper">
                    <div class="food-restrictions">
                        <input type="text" class="food-restrictions__string" placeholder="Название ограничения" />
                        <div class="food-restrictions__title2">Медицинские ограничения</div>
                    </div>
                    <div class="prohibited-ingredients">
                        <div class="choise-block">
                            <span class="prohibited-ingredients__ingredients2">Запрещённые ингредиенты:</span>
                            <input type="text" class="food-restrictions__string2" placeholder="Поиск" />
                            <div class="choise-block__ingredients ingredients-block">
                                <div class="ingredients-block__category">
                                    <div class="ingredients-block__main-subblock">
                                        <div class="ingredients-block__text-checkbox Ch">
                                            <input type="checkbox" class="ingredients-block__checkbox" />
                                            <div type="checkbox" class="ingredients-block__text">Грибы</div>
                                        </div>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" class="ingredients-block__img" />
                                    </div>
                                    <div class="ingredients-block__subblock subblock-category">
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Грибы приморские</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Грибы Отморские</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Грибы заморские</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ingredients-block__category">
                                    <div class="ingredients-block__main-subblock">
                                        <div class="ingredients-block__text-checkbox Ch">
                                            <input type="checkbox" class="ingredients-block__checkbox" />
                                            <div type="checkbox" class="ingredients-block__text">Овощи</div>
                                        </div>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" class="ingredients-block__img" />
                                    </div>
                                    <div class="ingredients-block__subblock subblock-category Ch">
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Помидор</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Огурец</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Кабачок</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ingredients-block__category">
                                    <div class="ingredients-block__main-subblock">
                                        <div class="ingredients-block__text-checkbox Ch">
                                            <input type="checkbox" class="ingredients-block__checkbox" />
                                            <div type="checkbox" class="ingredients-block__text">Мясо</div>
                                        </div>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" class="ingredients-block__img" />
                                    </div>
                                    <div class="ingredients-block__subblock subblock-category">
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Жирное</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Хрупкое</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Заморское</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ingredients-block__category">
                                    <div class="ingredients-block__main-subblock">
                                        <div class="ingredients-block__text-checkbox Ch">
                                            <input type="checkbox" class="ingredients-block__checkbox" />
                                            <div type="checkbox" class="ingredients-block__text">Оливки</div>
                                        </div>
                                        <img src="{% static '/img/Arrow.png' %}" alt="arrow" class="ingredients-block__img" />
                                    </div>
                                    <div class="ingredients-block__subblock subblock-category">
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Оливки японские</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Оливки Отморские</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Оливки заморские</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Оливки еврейские</div>
                                        </div>
                                        <div class="subblock-category__subcategory-block Ch">
                                            <input type="checkbox" class="subblock-category__checkbox" />
                                            <div type="checkbox" class="subblock-category__text">Оливки пируанские</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="prosmotr_vseh_ogr">
                            <button name="button" class="button button__text">
                                Готово
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}