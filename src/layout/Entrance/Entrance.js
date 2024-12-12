import Header from "../../components/Header";

export default function Entrance() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">

                        <div className="container">
                            <label className="a"> Вход </label>
                        </div>
                        <div className="container2">
                            <input type="text" className="p1" placeholder="Имя пользователя" maxlength="45" name="FIO" id="FIO" />
                            <input type="password" className="p2" placeholder="Пароль" maxlength="15" name="password" id="password" />
                            <span className="pass-icon" id="pass-icon"><img className="pass-icon2" src="{% static 'img/eye.png' %}"/></span>
                        </div>
                        <div className="container3">
                            <button className="button button-blue">
                                Войти
                            </button>
                            <button className="button2 button-white">
                                Проблемы с входом?
                            </button>
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