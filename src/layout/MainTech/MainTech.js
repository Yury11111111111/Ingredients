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
      .get("http://127.0.0.1:8000/main/", {
        withCredentials: false,
      })
      .then((response) => {
        console.log(response);
        setRationData(response.data.rations);
        setCompositionsData(response.data.compositions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="main-tech">
      <Header navName="navTech"/>
      <main className="main-tech__content">
        <div className="main-tech__grid">
          <section className="main-tech__section main-tech__section--ration">
            <Link to="/CreatingRation" className="main-tech__create-link">
              <div className="main-tech__create-card">
                <div>Создать рацион</div>
                <CreatingRationSvg className="main-tech__create-icon" />
              </div>
            </Link>
            <div className="main-tech__items-list">
              {rationData.map((item) => (
                <div
                  key={`ration-${item.id}`}
                  className="main-tech__item-container"
                >
                  <Link
                    to={item.link}
                    className="main-tech__item"
                    onMouseEnter={() => setHoveredItem(`ration-${item.id}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="main-tech__item-title">{item.title}</div>
                    {hoveredItem === `ration-${item.id}` && (
                      <div className="main-tech__tooltip">
                        <div className="main-tech__tooltip-text">
                          {item.text}
                        </div>
                        {item.date && (
                          <div className="main-tech__tooltip-date">
                            {item.date}
                          </div>
                        )}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="main-tech__section main-tech__section--composition">
            <Link to="/CreatingPk" className="main-tech__create-link">
              <div className="main-tech__create-card">
                <div>Создать пищевую композицию</div>
                <CreatingRationSvg className="main-tech__create-icon" />
              </div>
            </Link>
            <div className="main-tech__items-list">
              {compositionsData.map((item) => (
                <div
                  key={`composition-${item.id}`}
                  className="main-tech__item-container"
                  onMouseEnter={() => setHoveredItem(`food-${item.id}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={item.link} className="main-tech__item">
                    <div className="main-tech__item-title">{item.title}</div>
                    {hoveredItem === `food-${item.id}` && (
                      <div className="main-tech__tooltip">
                        <div className="main-tech__tooltip-text">
                          {item.text}
                        </div>
                        {item.date && (
                          <div className="main-tech__tooltip-date">
                            {item.date}
                          </div>
                        )}
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
