import { useState } from "react";
import Header from "../../components/Header/Header";
import "./BasicInfAboutRation.css";
import Button from "../../components/Button/Button";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function BasicInfAboutRation() {
  const [formData, setFormData] = useState({
    "ration-name": "",
    "organisation-name": "",
    "Ration-textarea": "",
    "count-ration-date": "7",
    "count-meal-days": "",
    "calendar-date": "",
    technologist: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const post = () => {
    axios
      .post("http://127.0.0.1:8000/ration/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Успешно:", response.data);
        // Перенаправление или другие действия после успешной отправки
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Важно: предотвращаем дефолтное поведение формы (GET)
    post(); // Вызываем функцию отправки
  };

  return (
    <>
      <Header navName="navTech"/>
      <main className="basic-inf-about-ration">
        <div className="basic-inf-about-ration__wrapper">
          <form
            className="basic-inf-about-ration__form"
            onSubmit={handleSubmit}
          >
            <div className="basic-inf-about-ration__names">
              <input
                type="text"
                className="basic-inf-about-ration__names-rationName"
                placeholder="Название рациона"
                name="ration-name"
                value={formData["ration-name"]}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="basic-inf-about-ration__names-organisationName"
                placeholder="Название организации заказчика"
                name="organisation-name"
                value={formData["organisation-name"]}
                onChange={handleChange}
                required
              />
            </div>

            <div className="basic-inf-about-ration__description">
              <span className="basic-inf-about-ration__description-title">
                Описание
              </span>
              <br/>
              <textarea
                className="basic-inf-about-ration__description-text"
                placeholder="Описание рациона"
                name="Ration-textarea"
                value={formData["Ration-textarea"]}
                onChange={handleChange}
                required
              />
            </div>

            <div className="basic-inf-about-ration__selects">
              <div className="basic-inf-about-ration__select-left">
                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Количество дней в рационе
                  </span>
                  <select
                    className="basic-inf-about-ration__select"
                    name="count-ration-date"
                    value={formData["count-ration-date"]}
                    onChange={handleChange}
                    required
                  >
                    <option value="7">7 (1 неделя)</option>
                    <option value="14">14 (2 недели)</option>
                    <option value="21">21 (3 недели)</option>
                    <option value="28">28 (4 недели)</option>
                    <option value="35">35 (5 недель)</option>
                    <option value="42">42 (6 недель)</option>
                    <option value="49">49 (7 недель)</option>
                    <option value="56">56 (8 недель)</option>
                    <option value="63">63 (9 недель)</option>
                    <option value="70">70 (10 недель)</option>
                    <option value="77">77 (11 недель)</option>
                    <option value="84">84 (12 недель)</option>
                    <option value="91">91 (13 недель)</option>
                    <option value="98">98 (14 недель)</option>
                    <option value="105">105 (15 недель)</option>
                    <option value="112">112 (16 недель)</option>
                  </select>
                </div>

                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Количество приемов пищи в день
                  </span>
                  <select
                    className="basic-inf-about-ration__select"
                    name="count-meal-days"
                    value={formData["count-meal-days"]}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Выберите</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div className="basic-inf-about-ration__selects-right">
                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Дата рациона
                  </span>
                  <input
                    type="date"
                    className="basic-inf-about-ration__select"
                    name="calendar-date"
                    value={formData["calendar-date"]}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Технолог:
                  </span>
                  <select
                    className="basic-inf-about-ration__select"
                    name="technologist"
                    value={formData["technologist"]}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Выберите технолога</option>
                    <option value="first">Светлана</option>
                    <option value="second">Георгий</option>
                    <option value="third">Вероника</option>
                    <option value="fourth">Владимир</option>
                  </select>
                </div>
              </div>
            </div>

            <Button type="submit" text="Продолжить" onClick={handleSubmit} />
          </form>
        </div>
      </main>
    </>
  );
}
