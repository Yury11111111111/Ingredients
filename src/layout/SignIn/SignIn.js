export default function Vhod() {
    return (
        <>
            <nav>
                <div className="extra-block">
                    <div className="menu">
                        <div className="menu__title logo-block">
                            <span className="logo-block__text">Taste</span>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="1">Главная</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="2">Рационы</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="3">О нас</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="4">Контакты</a>
                        </div>
                        <img src="{% static 'img/trubka.png' %}" alt="" className="menu__img menu__img_margin-88" />

                    </div>
                </div>
            </nav>
            <main>
                <div className="wrapper">

                    <div className="prohibited-ingredients">
                        <div className="container">
                            <label className="a"> Вход </label>
                        </div>
                        <div className="container2">
                            <input type="text" className="p1" placeholder="Имя пользователя" width="200px" maxlength="45" name="FIO" id="FIO" />
                            <input type="password" className="p2" placeholder="Пароль" maxlength="15" name="password" id="password" />
                            <span className="pass-icon" id="pass-icon"><img className="pass-icon2" src="{% static 'img/eye.png' %}" /></span>
                        </div>
                        <div className="container3">
                            <button className="button button-blue">
                                Войти
                            </button>
                            <form action="registration">
                                <button className="button2 button-white">
                                    Регистрация
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="Modal" id="myModal">
                    <div className="Modal-Window">
                        <h1>
                            Неверное имя пользователя или пароль
                        </h1>
                        <button className="btn-close" id="close-modal">X</button>
                    </div>
                </div>
            </main>
        </>
    );
}