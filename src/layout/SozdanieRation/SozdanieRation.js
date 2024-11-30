export default function SozdanieRation() {
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


                    </div>
                    <div className="page-name">
                        <span className="page-name__title">formration</span>
                    </div>
                </div>
            </nav>
            <main>
                <div className="wrapper">
                    <form name="newRacionForm" method="post" className="main-form" action="/" id="newRacionForm">


                        <button>Привет</button>
                        <table id="foodTable0" border="1">
                            <thead>
                                <tr align="center" className="title-block">
                                    <td className="title-block__text main-column" rowspan="2">Приём пищи</td>
                                    <td className="title-block__text" colspan="28">Нутриенты</td>
                                </tr>
                                <tr className="title-block" style="width: 50px;" align="center">
                                    <td className="title-block__text td_weight weight-cell">Вес</td>
                                    <td className="title-block__text td_weight water-cell" >Вода</td>
                                    <td className="title-block__text td_weight protein-cell">Бел</td>
                                    <td className="title-block__text td_weight fat-cell">Жир</td>
                                    <td className="title-block__text td_weight nshk-cell">НЖК</td>
                                    <td className="title-block__text td_weight hol-cell">Хол</td>
                                    <td className="title-block__text td_weight mds-cell">МДС</td>
                                    <td className="title-block__text td_weight kp-cell">Кр</td>
                                    <td className="title-block__text td_weight ugl-cell">Угл</td>
                                    <td className="title-block__text td_weight pv-cell">ПВ</td>
                                    <td className="title-block__text td_weight ok-cell">ОК</td>
                                    <td className="title-block__text td_weight ash-cell">Зола</td>
                                    <td className="title-block__text td_weight na-cell">Na</td>
                                    <td className="title-block__text td_weight k-cell">K</td>
                                    <td className="title-block__text td_weight ca-cell">Ca</td>
                                    <td className="title-block__text td_weight mg-cell">Mg</td>
                                    <td className="title-block__text td_weight p-cell">P</td>
                                    <td className="title-block__text td_weight fe-cell">Fe</td>
                                    <td className="title-block__text td_weight a-cell">A</td>
                                    <td className="title-block__text td_weight kar-cell">Кар</td>
                                    <td className="title-block__text td_weight pe-cell">РЭ</td>
                                    <td className="title-block__text td_weight te-cell">ТЭ</td>
                                    <td className="title-block__text td_weight b1-cell">B1</td>
                                    <td className="title-block__text td_weight b2-cell">B2</td>
                                    <td className="title-block__text td_weight pp-cell">PP</td>
                                    <td className="title-block__text td_weight ne-cell">НЭ</td>
                                    <td className="title-block__text td_weight c-cell">C</td>
                                    <td className="title-block__text td_weight ec-cell">ЭЦ</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr align="center" className="food-composition" id="id1">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК1</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply0()" id="myNumberInput0.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply0()" id="cell0.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr className="food-composition" align="center" id="rowend">
                                    <td className="food-composition__add add-field">

                                        <div className="add-field__text">Добавить</div>
                                        <div className="add-field__hidden new-list">
                                            <div className="new-list__subblock">
                                                <a href="#popup" className="new-list__ingredients-link">
                                                    <div className="new-list__ingredients">
                                                        <div className="new-list__text">Ингредиенты</div>
                                                    </div>
                                                </a>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__excomposition">
                                                    <div className="new-list__text">Существующие приёмы пищи</div>
                                                </div>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__newcomposition">
                                                    <div className="new-list__text">Новый приём пищи</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                </tr>
                            </tbody>
                        </table>

                        <div id="inputFields">
                            <b onclick="addRow(rowend)">Добавить строку</b>
                            <label>Название: <input type="text" id="inputTitle" /></label>
                            <label>Вес: <input type="number" id="inputWeight" value="1" /></label>

                        </div>

                        <table>
                            <thead>
                                <tr align="center" className="title-block">
                                    <td className="title-block__text main-column" rowspan="2">Приём пищи</td>
                                    <td className="title-block__text" colspan="28">Нутриенты</td>
                                </tr>
                                <tr className="title-block" style="width: 50px;" align="center">
                                    <td className="title-block__text td_weight weight-cell">Вес</td>
                                    <td className="title-block__text td_weight water-cell" >Вода</td>
                                    <td className="title-block__text td_weight protein-cell">Бел</td>
                                    <td className="title-block__text td_weight fat-cell">Жир</td>
                                    <td className="title-block__text td_weight nshk-cell">НЖК</td>
                                    <td className="title-block__text td_weight hol-cell">Хол</td>
                                    <td className="title-block__text td_weight mds-cell">МДС</td>
                                    <td className="title-block__text td_weight kp-cell">Кр</td>
                                    <td className="title-block__text td_weight ugl-cell">Угл</td>
                                    <td className="title-block__text td_weight pv-cell">ПВ</td>
                                    <td className="title-block__text td_weight ok-cell">ОК</td>
                                    <td className="title-block__text td_weight ash-cell">Зола</td>
                                    <td className="title-block__text td_weight na-cell">Na</td>
                                    <td className="title-block__text td_weight k-cell">K</td>
                                    <td className="title-block__text td_weight ca-cell">Ca</td>
                                    <td className="title-block__text td_weight mg-cell">Mg</td>
                                    <td className="title-block__text td_weight p-cell">P</td>
                                    <td className="title-block__text td_weight fe-cell">Fe</td>
                                    <td className="title-block__text td_weight a-cell">A</td>
                                    <td className="title-block__text td_weight kar-cell">Кар</td>
                                    <td className="title-block__text td_weight pe-cell">РЭ</td>
                                    <td className="title-block__text td_weight te-cell">ТЭ</td>
                                    <td className="title-block__text td_weight b1-cell">B1</td>
                                    <td className="title-block__text td_weight b2-cell">B2</td>
                                    <td className="title-block__text td_weight pp-cell">PP</td>
                                    <td className="title-block__text td_weight ne-cell">НЭ</td>
                                    <td className="title-block__text td_weight c-cell">C</td>
                                    <td className="title-block__text td_weight ec-cell">ЭЦ</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr align="center" className="title-date">
                                    <td className="title-date__datetime" colspan="29">День 1 / 01.06.2021</td>
                                </tr>
                                <tr align="center" className="food-composition" id="id1">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК1</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply()" id="myNumberInput1.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply()" id="cell1.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id1">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК2</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply2()" id="myNumberInput2.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply2()" id="cell2.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id1">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК3</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply3()" id="myNumberInput3.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply3()" id="cell3.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id1">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК4</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply4()" id="myNumberInput4.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply4()" id="cell4.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id1">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК5</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply5()" id="myNumberInput5.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply5()" id="cell5.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr className="food-composition" align="center" id="id1">
                                    <td className="food-composition__add add-field">

                                        <div className="add-field__text">Добавить</div>
                                        <div className="add-field__hidden new-list">
                                            <div className="new-list__subblock">
                                                <a href="#popup" className="new-list__ingredients-link">
                                                    <div className="new-list__ingredients">
                                                        <div className="new-list__text">Ингредиенты</div>
                                                    </div>
                                                </a>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__excomposition">
                                                    <div className="new-list__text">Существующие приёмы пищи</div>
                                                </div>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__newcomposition">
                                                    <div className="new-list__text">Новый приём пищи</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                </tr>
                                <tr className="food-composition" align="center" id="id1">
                                    <td className="food-composition__total">Итого:</td>
                                    <td><input type="number" className="weight-cell" /></td>
                                    <td><input disabled value="0" type="number" className="water-cell" /></td>
                                    <td><input disabled value="0" type="number" className="protein-cell" /></td>
                                    <td><input disabled value="0" type="number" className="fat-cell" /></td>
                                    <td><input disabled value="0" type="number" className="nshk-cell" /></td>
                                    <td><input disabled value="0" type="number" className="hol-cell" /></td>
                                    <td><input disabled value="0" type="number" className="mds-cell" /></td>
                                    <td><input disabled value="0" type="number" className="kp-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ugl-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pv-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ok-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ash-cell" /></td>
                                    <td><input disabled value="0" type="number" className="na-cell" /></td>
                                    <td><input disabled value="0" type="number" className="k-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ca-cell" /></td>
                                    <td><input disabled value="0" type="number" className="mg-cell" /></td>
                                    <td><input disabled value="0" type="number" className="p-cell" /></td>
                                    <td><input disabled value="0" type="number" className="fe-cell" /></td>
                                    <td><input disabled value="0" type="number" className="a-cell" /></td>
                                    <td><input disabled value="0" type="number" className="kar-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pe-cell" /></td>
                                    <td><input disabled value="0" type="number" className="te-cell" /></td>
                                    <td><input disabled value="0" type="number" className="b1-cell" /></td>
                                    <td><input disabled value="0" type="number" className="b2-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pp-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ne-cell" /></td>
                                    <td><input disabled value="0" type="number" className="c-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="title-date">
                                    <td className="title-date__datetime" colspan="29">День 2 / 02.06.2021</td>
                                </tr>
                                <tr align="center" className="food-composition" id="id2">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК1</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply6()" id="myNumberInput6.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply6()" id="cell6.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id2">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК2</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply7()" id="myNumberInput7.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply7()" id="cell7.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id2">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК3</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply8()" id="myNumberInput8.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply8()" id="cell8.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id2">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК4</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply9()" id="myNumberInput9.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply9()" id="cell9.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id2">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК5</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply10()" id="myNumberInput10.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply10()" id="cell10.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id2">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК6</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply11()" id="myNumberInput11.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply11()" id="cell11.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr className="food-composition" align="center" id="id2">
                                    <td className="food-composition__add add-field">

                                        <div className="add-field__text">Добавить</div>
                                        <div className="add-field__hidden new-list">
                                            <div className="new-list__subblock">
                                                <a href="#popup" className="new-list__ingredients-link">
                                                    <div className="new-list__ingredients">
                                                        <div className="new-list__text">Ингредиенты</div>
                                                    </div>
                                                </a>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__excomposition">
                                                    <div className="new-list__text">Существующие приёмы пищи</div>
                                                </div>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__newcomposition">
                                                    <div className="new-list__text">Новый приём пищи</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                </tr>

                                <tr className="food-composition" align="center" id="id2">
                                    <td className="food-composition__total">Итого:</td>
                                    <td><input type="number" className="weight-cell" /></td>
                                    <td><input disabled value="0" type="number" className="water-cell" /></td>
                                    <td><input disabled value="0" type="number" className="protein-cell" /></td>
                                    <td><input disabled value="0" type="number" className="fat-cell" /></td>
                                    <td><input disabled value="0" type="number" className="nshk-cell" /></td>
                                    <td><input disabled value="0" type="number" className="hol-cell" /></td>
                                    <td><input disabled value="0" type="number" className="mds-cell" /></td>
                                    <td><input disabled value="0" type="number" className="kp-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ugl-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pv-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ok-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ash-cell" /></td>
                                    <td><input disabled value="0" type="number" className="na-cell" /></td>
                                    <td><input disabled value="0" type="number" className="k-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ca-cell" /></td>
                                    <td><input disabled value="0" type="number" className="mg-cell" /></td>
                                    <td><input disabled value="0" type="number" className="p-cell" /></td>
                                    <td><input disabled value="0" type="number" className="fe-cell" /></td>
                                    <td><input disabled value="0" type="number" className="a-cell" /></td>
                                    <td><input disabled value="0" type="number" className="kar-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pe-cell" /></td>
                                    <td><input disabled value="0" type="number" className="te-cell" /></td>
                                    <td><input disabled value="0" type="number" className="b1-cell" /></td>
                                    <td><input disabled value="0" type="number" className="b2-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pp-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ne-cell" /></td>
                                    <td><input disabled value="0" type="number" className="c-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="title-date">
                                    <td className="title-date__datetime" colspan="29">День 3 / 03.06.2021</td>
                                </tr>
                                <tr align="center" className="food-composition" id="id3">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК1</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply12()" id="myNumberInput12.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply12()" id="cell12.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id3">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК2</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply13()" id="myNumberInput13.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply13()" id="cell13.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id3">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК3</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply14()" id="myNumberInput14.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply14()" id="cell14.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id3">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК4</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply15()" id="myNumberInput15.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply15()" id="cell15.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr align="center" className="food-composition" id="id3">
                                    <td className="food-composition__title composition-title-field">
                                        <div className="composition-title-field__flex">

                                            <div className="composition-title-field__text">ПК5</div>

                                        </div>
                                        <div className="composition-title-field__hidden composition-delete-block" style="display:none">
                                            <div className="composition-delete-block__title">Точно хотите удалить?</div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subfirst">
                                                    <div className="composition-delete-block__first">Да</div>
                                                </div>
                                            </div>
                                            <div className="composition-delete-block__subblock">
                                                <div className="composition-delete-block__subsecond">
                                                    <div className="composition-delete-block__second">Нет</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input oninput="multiply16()" id="myNumberInput16.1" type="number" min="1" onkeydown="return event.key !== '-';" className="weight-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.2" disabled value="100" type="number" className="water-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.3" disabled value="98" type="number" className="protein-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.4" disabled value="97" type="number" className="fat-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.5" disabled value="96" type="number" className="nshk-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.6" disabled value="100" type="number" className="hol-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.7" disabled value="100" type="number" className="mds-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.8" disabled value="100" type="number" className="kp-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.9" disabled value="100" type="number" className="ugl-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.10" disabled value="100" type="number" className="pv-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.11" disabled value="100" type="number" className="ok-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.12" disabled value="100" type="number" className="ash-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.13" disabled value="100" type="number" className="na-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.14" disabled value="100" type="number" className="k-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.15" disabled value="100" type="number" className="ca-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.16" disabled value="100" type="number" className="mg-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.17" disabled value="100" type="number" className="p-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.18" disabled value="100" type="number" className="fe-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.19" disabled value="100" type="number" className="a-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.20" disabled value="100" type="number" className="kar-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.21" disabled value="100" type="number" className="pe-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.22" disabled value="100" type="number" className="te-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.23" disabled value="100" type="number" className="b1-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.24" disabled value="100" type="number" className="b2-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.25" disabled value="100" type="number" className="pp-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.26" disabled value="100" type="number" className="ne-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.27" disabled value="100" type="number" className="c-cell" /></td>
                                    <td><input oninput="multiply16()" id="cell16.28" disabled value="100" type="number" className="ec-cell" /></td>
                                </tr>
                                <tr className="food-composition" align="center" id="id3">
                                    <td className="food-composition__add add-field">

                                        <div className="add-field__text">Добавить</div>
                                        <div className="add-field__hidden new-list">
                                            <div className="new-list__subblock">
                                                <a href="#popup" className="new-list__ingredients-link">
                                                    <div className="new-list__ingredients">
                                                        <div className="new-list__text">Ингредиенты</div>
                                                    </div>
                                                </a>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__excomposition">
                                                    <div className="new-list__text">Существующие приёмы пищи</div>
                                                </div>
                                                <div className="new-list__line"></div>
                                                <div className="new-list__newcomposition">
                                                    <div className="new-list__text">Новый приём пищи</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                    <td><input disabled /></td>
                                </tr>
                                <tr className="food-composition" align="center" id="id3">
                                    <td className="food-composition__total">Итого:</td>
                                    <td><input type="number" className="weight-cell" /></td>
                                    <td><input disabled value="0" type="number" className="water-cell" /></td>
                                    <td><input disabled value="0" type="number" className="protein-cell" /></td>
                                    <td><input disabled value="0" type="number" className="fat-cell" /></td>
                                    <td><input disabled value="0" type="number" className="nshk-cell" /></td>
                                    <td><input disabled value="0" type="number" className="hol-cell" /></td>
                                    <td><input disabled value="0" type="number" className="mds-cell" /></td>
                                    <td><input disabled value="0" type="number" className="kp-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ugl-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pv-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ok-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ash-cell" /></td>
                                    <td><input disabled value="0" type="number" className="na-cell" /></td>
                                    <td><input disabled value="0" type="number" className="k-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ca-cell" /></td>
                                    <td><input disabled value="0" type="number" className="mg-cell" /></td>
                                    <td><input disabled value="0" type="number" className="p-cell" /></td>
                                    <td><input disabled value="0" type="number" className="fe-cell" /></td>
                                    <td><input disabled value="0" type="number" className="a-cell" /></td>
                                    <td><input disabled value="0" type="number" className="kar-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pe-cell" /></td>
                                    <td><input disabled value="0" type="number" className="te-cell" /></td>
                                    <td><input disabled value="0" type="number" className="b1-cell" /></td>
                                    <td><input disabled value="0" type="number" className="b2-cell" /></td>
                                    <td><input disabled value="0" type="number" className="pp-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ne-cell" /></td>
                                    <td><input disabled value="0" type="number" className="c-cell" /></td>
                                    <td><input disabled value="0" type="number" className="ec-cell" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="button-update">
                            <div className="button-update__text">Сгенерировать ещё раз</div>
                        </div>
                        <div className="submit-block">
                            <a href="/maint" name="button" className="submit-block__button">
                                Готово
                            </a>
                        </div>
                    </form>

                </div>
            </main>
        </>
    );
}