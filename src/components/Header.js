import '../style/Header.css';
import Question from '../style/img/question.svg'; 

function Header() {
// Это Header, чего ты тут ожидал?

  return (
    <header>
      <nav class="noselect">
            <div class="extra-block">
                <div class="menu">
                    <div class="menu__title logo-block">
                        <span class="logo-block__text">Taste</span>
                    </div>
                    <div class="menu__title">
                        <a href class="menu__link" tabindex="1">Главная</a>
                    </div>
                    <div class="menu__title">
                        <a href class="menu__link" tabindex="2">Архив</a>
                    </div>
                    <div class="menu__title">
                        <a href class="menu__link" tabindex="3">Редактор</a>
                    </div>
                    <div class="menu__title">
                        <a href class="menu__link" tabindex="4">Профиль</a>
                    </div>
                    <img src={Question} alt
                        class="menu__img menu__img_margin-88">
                    </img>
                </div>
                <div class="page-name">
                    <span class="page-name__title">Наименование ограничения</span>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
