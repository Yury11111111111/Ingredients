import { useState } from "react";
import "./Header.css";
import Question from "../../style/img/question.svg";
import { Link } from "react-router-dom";
import fork from "../../style/img/fork.svg";

export default function Header({ navName, pageTitle = "название рациона" }) {
  const [navMeneger] = useState([
    { name: "Главная", link: "/" },
    { name: "Архив", link: "/archive" },
    { name: "Редактор", link: "/" },
    { name: "Профиль", link: "/profile" },
  ]);

  const [navTech] = useState([
    { name: "Главная", link: "/" },
    { name: "Создание рациона", link: "/CreatingRation" },
    { name: "Профиль", link: "/profile" },
  ]);

  const [navEnter] = useState([
    { name: "Главная", link: "/" },
    { name: "Рационаы", link: "/CreatingRation" },
    { name: "О нас", link: "/profile" },
    { name: "Контакты", link: "/profile" },
  ]);

  let currentNav;

  switch (navName) {
    case "navMeneger":
      currentNav = navMeneger;
      break;
    case "navTech":
      currentNav = navTech;
      break;
    case "navEnter":
      currentNav = navEnter;
      break;
    default:
      currentNav = navMeneger;
  }
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo logo">
          <img className="logo__icon" src={fork} alt="Логотип Taste" />
          <span className="logo__text">Taste</span>
        </div>

        <nav className="header__nav nav">
          {currentNav.map((link, index) => (
            <div key={index} className="nav__item">
              <Link to={link.link} className="nav__link" tabIndex={index}>
                {link.name}
              </Link>
            </div>
          ))}

          <div className="nav__question">
            <Link to="/question" className="nav__link">
              <img src={Question} alt="Вопрос" className="nav__icon" />
            </Link>
          </div>
        </nav>
      </div>

      <div className="header__page-title">{pageTitle}</div>
    </header>
  );
}
