import { useState } from "react";
import Header from "../../components/Header/Header";
import "./BasicInfAboutRation.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function BasicInfAboutRation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    "ration-name": "",
    "organisation-name": "",
    "Ration-textarea": "",
    "count-ration-date": "7",
    "count-meal-days": "",
    "calendar-date": "",
    Season: "",
    region: "",
    technologist: "",
  });

  const [rationDaysOptions] = useState([
    { value: "7", label: "7 (1 неделя)" },
    { value: "14", label: "14 (2 недели)" },
    { value: "21", label: "21 (3 недели)" },
    { value: "28", label: "28 (4 недели)" },
    { value: "35", label: "35 (5 недель)" },
    { value: "42", label: "42 (6 недель)" },
    { value: "49", label: "49 (7 недель)" },
    { value: "56", label: "56 (8 недель)" },
    { value: "63", label: "63 (9 недель)" },
    { value: "70", label: "70 (10 недель)" },
    { value: "77", label: "77 (11 недель)" },
    { value: "84", label: "84 (12 недель)" },
    { value: "91", label: "91 (13 недель)" },
    { value: "98", label: "98 (14 недель)" },
    { value: "105", label: "105 (15 недель)" },
    { value: "112", label: "112 (16 недель)" },
  ]);

  const [mealsPerDayOptions] = useState([
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ]);

  const [seasons] = useState([
    { value: "winter", label: "Зима" },
    { value: "spring", label: "Весна" },
    { value: "summer", label: "Лето" },
    { value: "autumn", label: "Осень" },
  ]);

  const [technologists] = useState([
    { value: "first", label: "Светлана" },
    { value: "second", label: "Георгий" },
    { value: "third", label: "Вероника" },
    { value: "fourth", label: "Владимир" },
  ]);

  const [regions] = useState([
    "Белгородская область",
    "Брянская область",
    "Владимирская область",
    "Воронежская область",
    "Ивановская область",
    "Калужская область",
    "Костромская область",
    "Курская область",
    "Липецкая область",
    "Московская область",
    "Орловская область",
    "Рязанская область",
    "Смоленская область",
    "Тамбовская область",
    "Тверская область",
    "Тульская область",
    "Ярославская область",
    "г. Москва",
    "Республика Карелия",
    "Республика Коми",
    "Архангельская область",
    "Вологодская область",
    "Калининградская область",
    "Ленинградская область",
    "Мурманская область",
    "Новгородская область",
    "Псковская область",
    "г. Санкт-Петербург",
    "Республика Адыгея",
    "Республика Калмыкия",
    "Республика Крым",
    "Краснодарский край",
    "Астраханская область",
    "Волгоградская область",
    "Ростовская область",
    "г. Севастополь",
    "Республика Дагестан",
    "Республика Ингушетия",
    "Кабардино-Балкарская Республика",
    "Карачаево-Черкесская Республика",
    "Республика Северная Осетия – Алания",
    "Чеченская Республика",
    "Ставропольский край",
    "Республика Башкортостан",
    "Республика Марий Эл",
    "Республика Мордовия",
    "Республика Татарстан",
    "Удмуртская Республика",
    "Чувашская Республика",
    "Пермский край",
    "Кировская область",
    "Нижегородская область",
    "Оренбургская область",
    "Пензенская область",
    "Самарская область",
    "Саратовская область",
    "Ульяновская область",
    "Курганская область",
    "Свердловская область",
    "Тюменская область",
    "Челябинская область",
    "Республика Алтай",
    "Республика Тыва",
    "Республика Хакасия",
    "Алтайский край",
    "Красноярский край",
    "Иркутская область",
    "Кемеровская область – Кузбасс",
    "Новосибирская область",
    "Омская область",
    "Томская область",
    "Республика Бурятия",
    "Республика Саха (Якутия)",
    "Забайкальский край",
    "Камчатский край",
    "Приморский край",
    "Хабаровский край",
    "Амурская область",
    "Магаданская область",
    "Сахалинская область",
    "Еврейская автономная область",
    "Чукотский автономный округ",
  ]);

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
        localStorage.setItem("ration-name", response.data.ration.name);
        console.log(response);
        
        navigate("/CreatingRacionRestrictions");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post();
  };

  return (
    <>
      <Header navName="navTech" pageTitle="Новый рацион"/>
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
              <br />
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
                    {rationDaysOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
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
                    {mealsPerDayOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Сезон
                  </span>
                  <select
                    className="basic-inf-about-ration__select"
                    name="Season"
                    value={formData["Season"]}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Выберите сезон</option>
                    {seasons.map((season) => (
                      <option key={season.value} value={season.value}>
                        {season.label}
                      </option>
                    ))}
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
                    {technologists.map((tech) => (
                      <option key={tech.value} value={tech.value}>
                        {tech.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Регион */}
                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Регион
                  </span>
                  <select
                    className="basic-inf-about-ration__select"
                    name="region"
                    value={formData["region"]}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Выберите регион</option>
                    {regions.map((region, index) => (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="basic-inf-about-ration__form-button">
              <Button type="submit" text="Продолжить" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
