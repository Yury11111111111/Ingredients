import React from "react";
import "./SignIn.css";
import Header from "../../components/Header/Header";

export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="sing-in__nav">
        <Header navName={"navEnter"} />
      </div>
      <main className="sign-in__main">
        <div className="sign-in__wrapper">
          <div className="sign-in__form">
            <h1 className="sign-in__title">Вход</h1>

            <div className="sign-in__input-group">
              <input
                type="text"
                className="sign-in__input"
                placeholder="Имя пользователя"
                maxLength="45"
              />
              <div className="sign-in__password-wrapper">
                <input
                  type="password"
                  className="sign-in__input"
                  placeholder="Пароль"
                  maxLength="15"
                />
                <span className="sign-in__toggle-password">
                  <img
                    src="/img/eye.png"
                    alt="Показать пароль"
                    className="sign-in__eye-icon"
                  />
                </span>
              </div>
            </div>

            <div className="sign-in__buttons">
              <button className="sign-in__button sign-in__button--primary">
                Войти
              </button>
              <a
                href="/Registration"
                className="sign-in__button sign-in__button--secondary"
              >
                Регистрация
              </a>
            </div>
          </div>
        </div>

        {/* Модальное окно (скрыто по умолчанию) */}
        <div className="sign-in__modal" id="signInModal">
          <div className="sign-in__modal-content">
            <h2>Неверное имя пользователя или пароль</h2>
            <button className="sign-in__modal-close">X</button>
          </div>
        </div>
      </main>
    </div>
  );
}
