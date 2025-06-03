import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MainTech.css";
import CreatingRationSvg from "../../style/img/CreatingRationSvg";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export default function MainTech() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [rationData, setRationData] = useState([]);
  const [compositionsData, setCompositionsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/main/")
      .then((response) => {
        setRationData(response.data.rations);
        setCompositionsData(response.data.compositions);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const deleteAllRationsAndCompositions = () => {
  //   // Сначала удаляем все рационы
  //   axios
  //     .delete("http://127.0.0.1:8000/delete-all-rations/", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-CSRFToken": document.cookie.match(/csrftoken=([^;]+)/)?.[1] || "",
  //       },
  //     })
  //     .then(() => {
  //       // После успешного удаления рационов удаляем все PK
  //       return axios.delete("http://127.0.0.1:8000/delete-all-compositions/", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-CSRFToken":
  //             document.cookie.match(/csrftoken=([^;]+)/)?.[1] || "",
  //         },
  //       });
  //     })
  //     .then((response) => {
  //       console.log("Все PK и рационы успешно удалены", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при удалении:", error);
  //       alert("Произошла ошибка при удалении");
  //     });
  // };

  return (
    <div className="main-tech">
      <Header navName="navTech" pageTitle=""/>
      <main className="main-tech__content">
        <div className="main-tech__grid">
          <section className="main-tech__section main-tech__section--ration">
            <Link to="/BasicInfAboutRation" className="main-tech__create-link">
              <div className="main-tech__create-card">
                <div>Создать рацион</div>
                <CreatingRationSvg className="main-tech__create-icon" />
              </div>
            </Link>
            <div className="main-tech__items-list">
              {rationData.map((ration) => (
                <div
                  key={`ration-${ration.id_ration}`}
                  className="main-tech__item-container"
                >
                  <Link
                    to={`/ration/${ration.id_ration}`}
                    className="main-tech__item"
                    onMouseEnter={() =>
                      setHoveredItem(`ration-${ration.id_ration}`)
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="main-tech__item-title">{ration.name}</div>
                    {hoveredItem === `ration-${ration.id_ration}` && (
                      <div className="main-tech__tooltip">
                        <div className="main-tech__tooltip-text">
                          {ration.description}
                        </div>
                        <div className="main-tech__tooltip-date">
                          {ration.date}
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Секция пищевых композиций */}
          <section className="main-tech__section main-tech__section--composition">
            <Link to="/CreatingPk" className="main-tech__create-link">
              <div className="main-tech__create-card">
                <div>Создать пищевую композицию</div>
                <CreatingRationSvg className="main-tech__create-icon" />
              </div>
            </Link>
            <div className="main-tech__items-list">
              {compositionsData.map((composition) => (
                <div
                  key={`composition-${composition.code}`}
                  className="main-tech__item-container"
                >
                  <Link
                    to={`/composition/${composition.code}`}
                    className="main-tech__item"
                    onMouseEnter={() =>
                      setHoveredItem(`composition-${composition.code}`)
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="main-tech__item-title">
                      {composition.name}
                    </div>
                    {hoveredItem === `composition-${composition.code}` && (
                      <div className="main-tech__tooltip">
                        <div className="main-tech__tooltip-text">
                          {composition.description}
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
