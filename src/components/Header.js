import '../style/Header.css'
import Question from '../style/img/question.svg'; 
import {Link} from 'react-router-dom';

function Header() {
// Это Header, чего ты тут ожидал?

  return (
    <header>
      <nav className="noselect">
            <div className="extra-block">
                <div className="menu">
                    <div className="menu__title logo-block">
                        <span className="logo-block__text">Taste</span>
                    </div>
                    <div className="menu__title">

                        <Link to='/' className="menu__link" tabindex="1">Главная</Link>
                    </div>
                    <div className="menu__title">
                        <Link to='/archive' className="menu__link" tabindex="2">Архив</Link>
                    </div>
                    <div className="menu__title">
                        <Link to='/editor' className="menu__link" tabindex="3">Редактор</Link>
                    </div>
                    <div className="menu__title">
                        <Link to='/profile' className="menu__link" tabindex="4">Профиль</Link>

                    </div>
                    <img src={Question} alt
                        className="menu__img menu__img_margin-88">
                    </img>
                </div>
                <div className="page-name">
                    <span className="page-name__title">Наименование ограничения</span>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
