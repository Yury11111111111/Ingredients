import Header from "../../components/Header";

export default function BasInfAboutRation() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">

                    <form name="newRacionForm" method="POST" className="main-form" action="ration/restrictions">

                        <div className="first-block">
                            <input type="text" className="first-block__text" placeholder="Название рациона" name="ration-name" required />
                            <input type="text" className="first-block__text" placeholder="Название организации заказчика" name="organisation-name" required />
                        </div>
                        <div className="second-block">
                            <span className="second-block__title">Описание</span>
                            <textarea className="second-block__textarea" placeholder="Описание рациона" name="Ration-textarea" required></textarea>
                        </div>
                        <div className="third-block">
                            <div className="third-block__left-block block-parametr">
                                <div className="block-parametr__amount">
                                    <span className="block-parametr__title">Количество дней в рационе</span>
                                    <select className="block-parametr__list racion-days" name="count-ration-date" required>
                                        <option value="" disabled selected>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="block-parametr__date-block">
                                    <span className="block-parametr__title">Дата рациона</span>
                                    <input type="date" className="block-parametr__list calendar" name="calendar-date" required />
                                </div>
                            </div>
                            <div className="third-block__right-block block-parametr">
                                <div className="block-parametr__meal-block">
                                    <span className="block-parametr__title">Количество приемов пищи в день</span>
                                    <input type="number" min="0" className="block-parametr__list meal-count" name="count-meal-days" required />
                                    <select className="block-parametr__list meal-count" name="count-meal-days" required>
                                        <option>7 (1 неделя)</option>
                                        <option>14 (2 недели)</option>
                                        <option>21 (3 недели)</option>
                                        <option>28 (4 недели)</option>
                                        <option>35 (5 недель)</option>
                                        <option>42 (6 недель)</option>
                                        <option>49 (7 недель)</option>
                                        <option>56 (8 недель)</option>
                                        <option>63 (9 недель)</option>
                                        <option>70 (10 недель)</option>
                                        <option>77 (11 недель)</option>
                                        <option>84 (12 недель)</option>
                                        <option>91 (13 недель)</option>
                                        <option>98 (14 недель)</option>
                                        <option>105 (15 недель)</option>
                                        <option>112 (16 недель)</option>
                                    </select>

                                </div>
                                <div className="block-parametr__tech-block">
                                    <span className="block-parametr__title">Технолог:</span>
                                    <select className="block-parametr__list name-tech" name="technologist" required>
                                        <option value="" disabled selected>Выберите технолога</option>
                                        <option value="first">Светлана</option>
                                        <option value="second">Георгий</option>
                                        <option value="third">Вероника</option>
                                        <option value="fourth">Владимир</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="subblock-button">
                            <button type="submit" className="subblock-button__button">Продолжить</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}