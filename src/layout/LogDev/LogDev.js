import Header from "../../components/Header";

export default function LogDev() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">
                    <form>
                        <div className="food-restrictions">

                            Фильтр: с
                            <input type="date" className="actions__date actions__date_margin-28" />
                            по
                            <input type="date" className="actions__date actions__date_margin-28" />
                            тип действия
                            <select className="prohibited-ingredients__choice">
                                <option value="1"> Любой тип</option>
                                <option value="2"> Создание/изменение заказа</option>
                                <option value="3"> Создание/изменение рациона</option>
                                <option value="4"> Создание/изменение ПК</option>
                            </select>


                        </div>
                        <div className="food-restrictions2">

                            ID
                            <input type="text" className="food-restrictions__string" placeholder="" />
                            ID пользователя
                            <input type="text" className="food-restrictions__string" placeholder="" />
                            <button name="button" className="button button__text">
                                Поиск
                            </button>

                        </div>
                        <div className="prohibited-ingredients">
                            <div className="choise-block">
                                <div className="choise-block__ingredients ingredients-block">
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Грибы</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Овощи</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Мясо</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ingredients-block__category">
                                        <div className="ingredients-block__main-subblock">
                                            <div className="ingredients-block__text-checkbox">
                                                <input type="checkbox" className="ingredients-block__checkbox" />
                                                <div type="checkbox" className="ingredients-block__text">Оливки</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}