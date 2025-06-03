import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fio: "",
    role: "",
    post: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registration = () => {
    axios
      .post("http://127.0.0.1:8000/ration/registration/", formData, {
        withCredentials: false,
      })
      .then(function (response) {
        console.log(response.data);

        setFormData({
          fio: "",
          role: "",
          post: "",
          email: "",
          password: "",
        });

        navigate("/SignIn");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const gotomain = () => {
    navigate("/");
  };

  return (
    <>
      <Header navName={"navEnter"} pageTitle={"Регистрация"} />
      <main className="registration">
        <div className="registration__wrapper">
          <div className="registration__form">
            <input
              type="text"
              className="registration__input"
              placeholder="ФИО"
              maxLength="45"
              name="fio"
              id="FIO"
              value={formData.fio}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="registration__input"
              placeholder="Роль"
              maxLength="45"
              name="role"
              id="Role"
              value={formData.role}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="registration__input"
              placeholder="Должность"
              maxLength="45"
              name="post"
              id="Post"
              value={formData.post}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="registration__input"
              placeholder="Электронная почта"
              maxLength="45"
              name="email"
              id="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              className="registration__input"
              placeholder="Пароль"
              maxLength="45"
              name="password"
              id="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="registration__button">
          <Button text={"Зарегестрировать"} onClick={registration} />
        </div>
      </main>
    </>
  );
}
