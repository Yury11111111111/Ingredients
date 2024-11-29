import Header from "../../components/Header";

export default function IngredientRestructions() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">
                    <div name="newRacionForm" method="post" className="main-form" action="restriction/table" id="newRacionForm">

                        <div className="choise-block">
                            <input type="text" className="choise-block__search" placeholder="Поиск"/>
                                <div className="choise-block__ingredients ingredients-block">
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox Ch">
                                                <input type="checkbox" className="ingredients-block__checkbox" onclick="document.getElementById('checkbox1.0').checked = this.checked; document.getElementById('checkbox1.1').checked = this.checked;"/>
                                                    <div type="checkbox" className="ingredients-block__text">Грибы</div>
                                            </div>
                                            <img src="{% static 'img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                        </div>
                                        <div className="ingredients-block__subblock subblock-category" hidden>
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
                                            <div className="ingredients-block__category">
                                                <div className="ingredients-block__main-subblock ">
                                                    <div className="ingredients-block__text-checkbox Ch">
                                                        <input id="checkbox1.0" type="checkbox" className="ingredients-block__checkbox2"/>
                                                            <div type="checkbox" className="ingredients-block__text">Грибы 2</div>
                                                    </div>
                                                    <img src="{% static 'img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                                </div>
                                                <div className="ingredients-block__subblock subblock-category" hidden>
                                                    <div className="subblock-category__subcategory-block Ch">
                                                        <input id="checkbox1.1" type="checkbox" className="subblock-category__checkbox"/>
                                                            <div type="checkbox" className="subblock-category__text">Грибы приморские</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox Ch2">
                                                <input type="checkbox" className="ingredients-block__checkbox"/>
                                                    <div type="checkbox" className="ingredients-block__text">Овощи</div>
                                            </div>
                                            <img src="{% static 'img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                        </div>
                                        <div className="ingredients-block__subblock subblock-category" hidden>
                                            <div className="subblock-category__subcategory-block Ch2">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Помидор</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch2">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Огурец</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch2">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Кабачок</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox Ch3">
                                                <input type="checkbox" className="ingredients-block__checkbox"/>
                                                    <div type="checkbox" className="ingredients-block__text">Мясо</div>
                                            </div>
                                            <img src="{% static 'img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                        </div>
                                        <div className="ingredients-block__subblock subblock-category" hidden>
                                            <div className="subblock-category__subcategory-block Ch3">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Жирное</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch3">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Хрупкое</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch3">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Заморское</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox Ch4">
                                                <input type="checkbox" className="ingredients-block__checkbox"/>
                                                    <div type="checkbox" className="ingredients-block__text">Оливки</div>
                                            </div>
                                            <img src="{% static 'img/Arrow.png' %}" alt="arrow" className="ingredients-block__img"/>
                                        </div>
                                        <div className="ingredients-block__subblock subblock-category" hidden>
                                            <div className="subblock-category__subcategory-block Ch4">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Оливки японские</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch4">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Оливки Отморские</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch4">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Оливки заморские</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch4">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Оливки еврейские</div>
                                            </div>
                                            <div className="subblock-category__subcategory-block Ch4">
                                                <input type="checkbox" className="subblock-category__checkbox"/>
                                                    <div type="checkbox" className="subblock-category__text">Оливки пируанские</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise-block__line"></div>
                                <div className="choise-block__add-ingredient ingredient-add">
                                    <a href><div className="ingredient-add__checkbox"></div></a>
                                    <div className="ingredient-add__text">Добавить ингредиент</div>
                                </div>
                        </div>
                        <div className="selected-ingredients">
                            <div className="selected-ingredients__title">выбранные ингредиенты</div>
                            <div className="selected-ingredients__line"></div>
                            <div className="selected-ingredients__invisible">
                                <div className="selected-ingredients__text">Ничего не выбрано</div>
                            </div>
                            <div className="selected-ingredients__line"></div>
                        </div>
                        <div className="submit-block">
                            <form action="javascript:history.back()">
                                <button className="button">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}