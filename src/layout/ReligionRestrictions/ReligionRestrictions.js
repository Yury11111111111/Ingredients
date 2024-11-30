export default function ReligionRestrictions() {
    return (
        <>
            <nav>
                <div className="extra-block">
                    <div className="menu">
                        <div className="menu__title logo-block">
                            <span className="logo-block__text">Taste</span>
                        </div>
                        <div className="menu__title">
                            <a href="main" className="menu__link" tabindex="1">Главная</a>
                        </div>
                        <div className="menu__title">
                            <a href="arhiv" className="menu__link" tabindex="2">Создание рациона</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="3">Профиль</a>
                        </div>
                        <img src="{% static 'img/question.svg' %}" alt="" className="menu__img menu__img_margin-88" />

                    </div>
                    <div className="page-name">
                        <div className="food-restrictions__title">Название рациона</div>
                    </div>
                </div>
            </nav>
            <main>
                <div className="wrapper">
                    <h1 className="main__heading">РЕЛИГИОЗНЫЕ ОГРАНИЧЕНИЯ</h1>
                    <div className="main__religions">
                        <div className="one__religions">
                            <div className="religions">
                                <input type="checkbox" className="checkbox"></input>
                                ХРИСТИАНСТВО
                            </div>
                            <div className="religions__select" name="block_christianstvo">
                                <div className="search">
                                    <input className="select__input" type="text" placeholder="Поиск" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="pen">
                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                                    </svg>
                                </div>
                                <div className="ingredients-block">
                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">Пост</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">1</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                    <div className="unit Ch">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="one__religions">
                            <div className="religions">
                                <input type="checkbox" className="checkbox" />
                                ИСЛАМ
                            </div>
                            <div className="religions__select" name="block_islam">
                                <div className="search">
                                    <input className="select__input2" type="text" placeholder="Поиск" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="pen">
                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                                    </svg>
                                </div>
                                <div className="ingredients-block">
                                    <div className="unit Ch2">
                                        <input type="checkbox" className="unit__text checkbox1">Исламский пост</input>
                                    </div>

                                    <div className="unit Ch2">
                                        <input type="checkbox" className="unit__text checkbox1">2</input>
                                    </div>

                                    <div className="unit Ch2">
                                        <input type="checkbox" className="unit__text checkbox1">3</input>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__settings">
                        <div className="settings__active">
                            ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:
                            <div className="selected-ingredients">
                                <div className="selected-ingredients__line"></div>
                                <div className="selected-ingredients__invisible">
                                    <div className="selected-ingredients__text">Ничего не выбрано</div>
                                </div>
                                <div className="selected-ingredients__line"></div>
                            </div>
                        </div>

                        <form action="javascript:history.back()">
                            <button className="e button">Сохранить</button>
                        </form>
                    </div>
                </div>
            </main >
        </>
    );
}