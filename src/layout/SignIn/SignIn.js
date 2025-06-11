import React, { useState } from "react";
import "./SignIn.css";
import Header from "../../components/Header/Header";
import eye from "../../style/img/eye.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const post = (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setErrorMessage("Имя пользователя и пароль обязательны");
      setShowErrorModal(true);
      console.log(showErrorModal);

      return;
    }

    axios
      .post("http://46.149.68.85:8000/vhod/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // todo
        navigate("/MainTech");
      })
      .catch((error) => {
        setErrorMessage("Неверный логин или пароль");
        setShowErrorModal(true);
        console.log(error);
        
      });
  };

  const closeModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <Header navName={"navEnter"} pageTitle="" />
      <div className="sign-in">
        <main className="sign-in__main">
          <div className="sign-in__wrapper">
            <form className="sign-in__form">
              <h1 className="sign-in__title">Вход</h1>

              <div className="sign-in__input-group">
                <input
                  type="text"
                  name="username"
                  className="sign-in__input"
                  placeholder="Имя пользователя"
                  maxLength="45"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <div className="sign-in__password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="sign-in__input"
                    placeholder="Пароль"
                    maxLength="15"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <span
                    className="sign-in__toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={eye}
                      alt={showPassword ? "Скрыть пароль" : "Показать пароль"}
                      className="sign-in__eye-icon"
                    />
                  </span>
                </div>
              </div>

              <div className="sign-in__buttons">
                <button
                  type="submit"
                  className="sign-in__button sign-in__button--primary"
                  onClick={post}
                >
                  Войти
                </button>
                <Link
                  to="/Registration"
                  className="sign-in__button sign-in__button--secondary"
                >
                  Регистрация
                </Link>
              </div>
            </form>
          </div>

          {showErrorModal ? (
            <div className="sign-in__modal">
              <div className="sign-in__modal-content">
                <h2>{errorMessage}</h2>
                <button className="sign-in__modal-close" onClick={closeModal}>
                  X
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </main>
      </div>
    </>
  );
}
