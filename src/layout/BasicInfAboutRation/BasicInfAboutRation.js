import { useState } from "react";
import Header from "../../components/Header/Header";
import "./BasicInfAboutRation.css";
import Button from "../../components/Button/Button";

export default function BasicInfAboutRation() {
  const [formData, setFormData] = useState({
    rationName: "",
    organisationName: "",
    description: "",
    daysCount: "",
    rationDate: "",
    mealsPerDay: "",
    weeksCount: "7 (1 неделя)",
    technologist: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <Header />
      <main className="basic-inf-about-ration">
        <div className="basic-inf-about-ration__wrapper">
          <form
            name="newRacionForm"
            className="basic-inf-about-ration__form"
            onSubmit={handleSubmit}
          >
            <div className="basic-inf-about-ration__names">
              <input
                type="text"
                className="basic-inf-about-ration__names-rationName"
                placeholder="Название рациона"
                name="rationName"
                value={formData.rationName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                required
              />
              <input
                type="text"
                className="basic-inf-about-ration__names-organisationName"
                placeholder="Название организации заказчика"
                name="organisationName"
                value={formData.organisationName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
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
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="basic-inf-about-ration__selects">
              <div className="basic-inf-about-ration__select-left">
                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Количество дней в рационе
                  </span>
                  <br />
                  <select
                    className="basic-inf-about-ration__select"
                    name="daysCount"
                    value={formData.daysCount}
                    onChange={handleChange}
                    required
                  >
                    <option>7 (1 неделя)</option>
                    <option>14 (2 недели)</option>
                    <option>21 (3 недели)</option>
                    <option>28 (4 недели)</option>
                    <option>35 (5 недель)</option>
                    <option>42 (6 недель)</option>
                    <option>49 (7 недель)</option>
                    <option>56 (8 недель)</option>
                    <option>63 (9 недель)</option>
                    <option>70 (10 недель)</option>
                    <option>77 (11 недель)</option>
                    <option>84 (12 недель)</option>
                    <option>91 (13 недель)</option>
                    <option>98 (14 недель)</option>
                    <option>105 (15 недель)</option>
                    <option>112 (16 недель)</option>
                  </select>
                </div>
                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Количество приемов пищи в день
                  </span>
                  <br />
                  <select
                    type="number"
                    min="0"
                    className="basic-inf-about-ration__select"
                    name="mealsPerDay"
                    value={formData.mealsPerDay}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      0
                    </option>
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
                  <br />
                  <input
                    type="date"
                    className="basic-inf-about-ration__select"
                    name="rationDate"
                    value={formData.rationDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="basic-inf-about-ration__select-block">
                  <span className="basic-inf-about-ration__select-title">
                    Технолог:
                  </span>
                  <br />
                  <select
                    className="basic-inf-about-ration__select"
                    name="technologist"
                    value={formData.technologist}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Выберите технолога
                    </option>
                    <option value="first">Светлана</option>
                    <option value="second">Георгий</option>
                    <option value="third">Вероника</option>
                    <option value="fourth">Владимир</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Button text="Продолжить" />
      </main>
    </>
  );
}
