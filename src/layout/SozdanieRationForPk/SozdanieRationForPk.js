export default function SozdanieRationForPk() {
    return (
        <>
            <nav className="noselect">
                <div className="extra-block">
                    <div className="menu">
                        <div className="menu__title logo-block">
                            <span className="logo-block__text">Taste</span>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="1">Главная</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="2">Архив</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="3">Редактор</a>
                        </div>
                        <div className="menu__title">
                            <a href="" className="menu__link" tabindex="4">Профиль</a>
                        </div>
                        <img src="{% static 'img/question.svg' %}" alt="" className="menu__img menu__img_margin-88" />

                    </div>
                    <div className="page-name">
                        <span className="page-name__title"></span>
                    </div>
                </div>
            </nav>
            <main>
                <div className="wrapper">
                    <form name="newRacionForm" method="post" className="main-form" action="/pk" id="newRacionForm">

                        <table>
                            <thead>
                                <tr align="center" className="title-block">
                                    <td className="title-block__text main-column" rowspan="2">Пищевая композиция</td>
                                    <td className="title-block__text" colspan="28">Нутриенты</td>
                                </tr>
                                <tr className="title-block" align="center">
                                    <td className="title-block__text weight-cell">Вес</td>
                                    <td className="title-block__text water-cell" >Вода</td>
                                    <td className="title-block__text protein-cell">Бел</td>
                                    <td className="title-block__text fat-cell">Жир</td>
                                    <td className="title-block__text nshk-cell">НЖК</td>
                                    <td className="title-block__text hol-cell">Хол</td>
                                    <td className="title-block__text mds-cell">МДС</td>
                                    <td className="title-block__text kp-cell">Кр</td>
                                    <td className="title-block__text ugl-cell">Угл</td>
                                    <td className="title-block__text pv-cell">ПВ</td>
                                    <td className="title-block__text ok-cell">ОК</td>
                                    <td className="title-block__text ash-cell">Зола</td>
                                    <td className="title-block__text na-cell">Na</td>
                                    <td className="title-block__text k-cell">K</td>
                                    <td className="title-block__text ca-cell">Ca</td>
                                    <td className="title-block__text mg-cell">Mg</td>
                                    <td className="title-block__text p-cell">P</td>
                                    <td className="title-block__text fe-cell">Fe</td>
                                    <td className="title-block__text a-cell">A</td>
                                    <td className="title-block__text kar-cell">Кар</td>
                                    <td className="title-block__text pe-cell">РЭ</td>
                                    <td className="title-block__text te-cell">ТЭ</td>
                                    <td className="title-block__text b1-cell">B1</td>
                                    <td className="title-block__text b2-cell">B2</td>
                                    <td className="title-block__text pp-cell">PP</td>
                                    <td className="title-block__text ne-cell">НЭ</td>
                                    <td className="title-block__text c-cell">C</td>
                                    <td className="title-block__text ec-cell">ЭЦ</td>
                                </tr>
                                <tr align="center" className="title-select">
                                    <td className="title-select__ingredients" colspan="29">Выбранные ингредиенты</td>
                                </tr>
                                <tr className="food-composition" align="center">
                                    <td className="food-composition__total ">Итого:</td>
                                    <td><input type="number" className="weight-cell" /></td>
                                    <td><input disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                            </thead>
                            <tr align="center" className="title-ingredient">
                                <td className="title-ingredient__block" colspan="29">
                                    <div className="title-ingredient__flex">
                                        <input type="checkbox" className="title-ingredient__checkbox" />
                                        <div className="title-ingredient__title">Молоко и молочные продукты</div>
                                    </div>
                                </td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Молоко пастеризованное нежирное</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Молоко топленое 1,0 % жирности</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Молоко топленое нежирное</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Молоко белковое</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Пахта "Идеал" пастеризованная</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="title-ingredient">
                                <td className="title-ingredient__block" colspan="29">
                                    <div className="title-ingredient__flex">
                                        <input type="checkbox" className="title-ingredient__checkbox" />
                                        <div className="title-ingredient__title">Кисломолочные продукты</div>
                                    </div>
                                </td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Ацидофилин нежирный</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Ацидофилин 1,0 % жирности</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                            <tr align="center" className="food-composition">
                                <td className="food-composition__title composition-title-field">
                                    <div className="composition-title-field__flex">
                                        <input type="checkbox" className="composition-title-field__checkbox" />
                                        <div className="composition-title-field__text">Кефир нежирный</div>
                                    </div>
                                </td>
                                <td><input type="number" className="weight-cell" /></td>
                                <td><input disabled value="100" type="number" className="water-cell" /></td>
                                <td><input disabled value="98" type="number" className="protein-cell" /></td>
                                <td><input disabled value="97" type="number" className="fat-cell" /></td>
                                <td><input disabled value="96" type="number" className="nshk-cell" /></td>
                                <td><input disabled value="100" type="number" className="hol-cell" /></td>
                                <td><input disabled value="100" type="number" className="mds-cell" /></td>
                                <td><input disabled value="100" type="number" className="kp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ugl-cell" /></td>
                                <td><input disabled value="100" type="number" className="pv-cell" /></td>
                                <td><input disabled value="100" type="number" className="ok-cell" /></td>
                                <td><input disabled value="100" type="number" className="ash-cell" /></td>
                                <td><input disabled value="100" type="number" className="na-cell" /></td>
                                <td><input disabled value="100" type="number" className="k-cell" /></td>
                                <td><input disabled value="100" type="number" className="ca-cell" /></td>
                                <td><input disabled value="100" type="number" className="mg-cell" /></td>
                                <td><input disabled value="100" type="number" className="p-cell" /></td>
                                <td><input disabled value="100" type="number" className="fe-cell" /></td>
                                <td><input disabled value="100" type="number" className="a-cell" /></td>
                                <td><input disabled value="100" type="number" className="kar-cell" /></td>
                                <td><input disabled value="100" type="number" className="pe-cell" /></td>
                                <td><input disabled value="100" type="number" className="te-cell" /></td>
                                <td><input disabled value="100" type="number" className="b1-cell" /></td>
                                <td><input disabled value="100" type="number" className="b2-cell" /></td>
                                <td><input disabled value="100" type="number" className="pp-cell" /></td>
                                <td><input disabled value="100" type="number" className="ne-cell" /></td>
                                <td><input disabled value="100" type="number" className="c-cell" /></td>
                                <td><input disabled value="100" type="number" className="ec-cell" /></td>
                            </tr>
                        </table>
                        <div className="submit-block">
                            <button type="submit" className="submit-block__button">Продолжить</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}