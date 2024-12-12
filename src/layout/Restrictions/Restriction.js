export default function Restrictions() {
    return (
        <>
            <nav className="noselect">
                <div className="extra-block">
                    <div className="menu">
                        <div className="menu__title logo-block">
                            <span className="logo-block__text">Taste</span>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="1">Главная</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="2">Архив</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="3">Редактор</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="4">Профиль</a>
                        </div>
                        <img src="{% static 'img/question.svg' %}" alt="" className="menu__img menu__img_margin-88" />

                    </div>
                    <div className="page-name">
                        <span className="page-name__title"></span>
                    </div>
                    <div className="big-title">Ограничения</div>
                </div>
            </nav>
            <main>

                <section className="wrapper">
                    <div className="restriction">
                        <div className="main_restriction">
                            <div className="restriction_christianity">
                                <a href="restrictions/medical_restrictions" className="name_restriction">МЕДИЦИНСКИЕ</a>
                                <a href="" className="pen">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="restriction_select">
                                <p className="unit_title">ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:</p>
                                <div className="units">
                                    <input id="med" type="checkbox" value="Мед ограничение" />
                                    <label for="med" className="unit">Медицинские</label>

                                </div>
                            </div>
                        </div>
                        <div className="main_restriction">
                            <div className="restriction_christianity">
                                <a href="restrictions/religion_restrictions" className="name_restriction">РЕЛИГИОЗНЫЕ</a>
                                <a href="" className="pen">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="restriction_select">
                                <p className="unit_title">ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:</p>
                                <div className="units">
                                    <input id="med" type="checkbox" value="Мед ограничение" />
                                    <label for="med" className="unit">Религия</label>

                                </div>
                            </div>
                        </div>
                        <div className="main_restriction">
                            <div className="restriction_christianity">
                                <a href="restrictions/ingredient_restructions" className="name_restriction">ПО ИНГРЕДИЕНТАМ</a>
                                <a href="" className="pen">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="restriction_select">
                                <p className="unit_title">ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:</p>
                                <div className="units">
                                    <input id="med" type="checkbox" value="Мед ограничение" />
                                    <label for="med" className="unit">Ингредиент</label>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <form action="restrictions/table">
                    <button className="button">Сформировать рацион</button>
                </form>
            </main>
        </>
    );
}