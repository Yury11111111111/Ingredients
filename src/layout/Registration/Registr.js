export default function Registr() {
    return(
        <>
        <nav>
        <div class="extra-block">
            <div class="menu">
                <div class="menu__title logo-block">
                    <span class="logo-block__text">Taste</span>
                </div>
                <div class="menu__title">
                    <a href="" class="menu__link" tabindex = "1">Главная</a>
                </div>
                <div class="menu__title">
                    <a href="" class="menu__link" tabindex = "2">Рационы</a>
                </div>
                <div class="menu__title">
                    <a href="" class="menu__link" tabindex = "3">О нас</a>
                </div>
                <div class="menu__title">
                    <a href="" class="menu__link" tabindex = "4">Контакты</a>
                </div>
                <img src="{% static 'img/sound.svg' %}" alt="" class="menu__img menu__img_margin-88"/>
            </div>
        </div>
        <div class="page-name">
            <div class="food-restrictions__title">Регистрация</div>
        </div>
    </nav>
    <main>
        <div class="wrapper">
                <div>
                    <img class="c" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGntfrDaO7qA6yme4fN6zkePqXRgwh_LGm0JPl1mUf3jpLYF8oWhjZJS-on2hllsDwGGQ&usqp=CAU" 
                    style="width:160px;height:160px;"
                    name="picture" id="picture"/>
                </div>
                <div class="container">
                    <input type="text" class="p" placeholder="ФИО" maxlength="45" name="FIO" id="FIO"/> 
                    <input type="text" class="p" placeholder="Роль" maxlength="45" name="Role" id="Role"/>
                    <input type="text" class="p" placeholder="Должность" maxlength="45" name="Post" id="Post"/>
                    <input type="email" class="p" placeholder="Электронна почта" maxlength="45" name="Email" id="Email"/> 
                </div>
                <form action="maint">
                    <div class="container2">
                            <button class="button button-blue">
                                Зарегистрировать
                            </button>
                    </div>
                </form>
        </div>
    </main>
        </>
    );
}