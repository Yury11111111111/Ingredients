import { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./CreatingPk.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function CreatingPk() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name_pc: "",
    description_pc: "",
    ingredient_list: "ing",
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
      .post("http://127.0.0.1:8000/pk/create/", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/MainTech")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <>
      <Header navName="navTech" pageTitle=""/>
      <div className="creating-pk">
        <main className="creating-pk__main">
          <form
            name="newPKForm"
            method="post"
            className="creating-pk__form"
            action="/"
            id="newPKForm"
          >
            <div className="creating-pk__name-block">
            <div className="creating-pk__description-title">НАЗВАНИЕ ПК</div>
              <input
                type="text"
                className="creating-pk__name-input"
                placeholder="Название пищевой композиции"
                name="name_pc"
                value={formData["name_pc"]}
                onChange={handleChange}
              />
            </div>
            <div className="creating-pk__description-block">
              <div className="creating-pk__description-title">ОПИСАНИЕ</div>
              <textarea
                className="creating-pk__description-textarea"
                placeholder="Введите описание здесь"
                name="description_pc"
                value={formData["description_pc"]}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="creating-pk__ingredients-block">
              <Link
                to="/CreatingRationForPk"
                className="creating-pk__ingredients-add"
              >
                Выбрать ингредиенты
              </Link>
            </div>
            <div className="creating-pk__selected-block">
              <div className="creating-pk__selected-title">
                Выбранные ингредиенты:
              </div>
              <div
                className="creating-pk__selected-list"
                onchange="autoFillMessage(this)"
              >
                <div className="creating-pk__selected-item">
                  <input
                    type="checkbox"
                    className="creating-pk__selected-checkbox"
                    checked
                    onchange="deleteIfNotSelected(this)"
                  />
                  <label className="creating-pk__selected-label">value</label>
                  <div className="creating-pk__selected-value">54,3 гр.</div>
                </div>
              </div>
            </div>
          </form>
        </main>
        <div className="creating-pk__submit-block">
          <Button text="Продолжить" onClick={post} />
        </div>
      </div>
    </>
  );
}
