import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MainTech.css";
import CreatingRationSvg from "../../style/img/CreatingRationSvg";

function MainTech() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const rationData = [
    {
      id: 1,
      title: "Зимний сезон",
      text: "Способ приготовления 1",
      date: "Dec. 1, 2023",
      link: "/CreatingRation",
    },
    {
      id: 2,
      title: "Весенний сезон",
      text: "Способ приготовления 2",
      date: "March 2, 2024",
      link: "/CreatingRation",
    },
    {
      id: 3,
      title: "Летний сезон",
      text: "Способ приготовления 3",
      date: "May 3, 2024",
      link: "/CreatingRation",
    },
    {
      id: 4,
      title: "Осенний сезон",
      text: "Способ приготовления 4",
      date: "September 4, 2024",
      link: "/CreatingRation",
    },
  ];

  const foodData = [
    {
      id: 1,
      title: "ПК 1",
      text: "Краткая информация о рационе",
      date: "",
      link: "/CreatingPk",
    },
  ];

  return (
    <div className="main-tech">
      <Header />
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
                  onMouseEnter={() => setHoveredItem(`ration-${item.id}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={item.link} className="main-tech__item">
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
              {foodData.map((item) => (
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

export default MainTech;
