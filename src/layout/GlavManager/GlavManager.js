import Header from "../../components/Header";

export default function GlavManager() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">
                    <div className="Big_name1">ТЕКУЩИЕ ЗАКАЗЫ</div>
                    <div className="Big_name2">ПОСЛЕДНИЕ РАЦИОНЫ </div>
                    <div className="racion">
                        <div className="racion__main-block block-main">
                            <a href="main/ration" className="block-main__subblock">Новый Заказ</a>
                        </div>
                        <a href="main/ration" className="racion__child-block block-child">
                            <div className="block-child__subblock">Название заказа
                                <label className="sp_1">Организация-Заказчик</label>
                                <label className="sp_1">ФИО Исполнителя</label>
                                <label className="sp_2">21-02-2021</label>
                            </div>
                        </a>
                        <a href="main/ration" className="racion__child-block block-child">
                            <div className="block-child__subblock">Название заказа 2
                                <label className="sp_1">Организация-Заказчик</label>
                                <label className="sp_1">ФИО Исполнителя</label>
                                <label className="sp_2">21-02-2021</label>
                            </div>
                        </a>
                    </div>
                    <div className="food-composition">
                        <div className="food-composition__child-block  block-child">
                            <div className="block-child__subblock">Рацион 1
                                <span className="sp_1">Организация-Заказчик</span>
                                <span className="sp_1">ФИО Исполнителя</span>
                                <span className="sp_2">21-02-2021</span>
                            </div>
                            <a href="main/ration">
                                <img src="{% static 'img/Vector.svg' %}" alt="profile" className="page-name__img2" />
                            </a>
                        </div>


                    </div>
                </div>
            </main>
        </>
    );
}