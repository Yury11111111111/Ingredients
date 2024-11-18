import Header from '../../components/Header';
import './style/MainTech.css'

function MainTech() {

    return (
        <>
            <Header />
            <main>
                <div className="wrapper">
                    <div className="racion">
                        <div className="prohibited-ingredients">
                            <div className="racion__main-block block-main">
                                <a href="ration" className="block-main__subblock">Создать рацион</a>
                            </div>
                            <div className="choise-block">
                                <a href="ration" className="racion__child-block block-child">
                                    <div className="block-child__subblock data">Зимний сезон</div>
                                    <div className="racion__hidden-block block-hidden">
                                        <div className="block-hidden__text">Способ приготовления 1</div>
                                        <div className="block-hidden__date">Dec. 1, 2023</div>
                                    </div>
                                </a>
                                <a href="ration" className="racion__child-block block-child">
                                    <div className="block-child__subblock data">Весенний сезон</div>
                                    <div className="racion__hidden-block block-hidden" >
                                        <div className="block-hidden__text">Способ приготовления 2</div>
                                        <div className="block-hidden__date">March 2, 2024</div>
                                    </div>
                                </a>
                                <a href="ration" className="racion__child-block block-child">
                                    <div className="block-child__subblock data">Летний сезон</div>
                                    <div className="racion__hidden-block block-hidden" >
                                        <div className="block-hidden__text">Способ приготовления 3</div>
                                        <div className="block-hidden__date">May 3, 2024</div>
                                    </div>
                                </a>
                                <a href="ration" className="racion__child-block block-child">
                                    <div className="block-child__subblock data">Осенний сезон</div>
                                    <div className="racion__hidden-block block-hidden">
                                        <div className="block-hidden__text">Способ приготовления 4</div>
                                        <div className="block-hidden__date">September 4, 2024</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="food-composition">
                        <div className="prohibited-ingredients">
                            <div className="food-composition__main-block block-main">
                                <a className="block-main__subblock" href="pk">Создать пищевую композицию</a>
                            </div>
                            <div className="choise-block">
                                <div href="" className="food-composition__child-block  block-child">
                                    <div className="block-child__subblock">ПК 1</div>
                                    <div className="food-composition__hidden-block block-hidden">
                                        <div className="block-hidden__text">Краткая информация о рационе</div>
                                        <div className="block-hidden__date"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainTech;
