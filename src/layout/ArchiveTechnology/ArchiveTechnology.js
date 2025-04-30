import Header from "../../components/Header/Header";
import "./ArchiveTechnology.css"

function AcrhiveTechnology() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="wrapper">
                    <form>
                        <div className="prohibited-ingredients">
                            <div className="choise-block">
                                <a className="block-child">
                                    <div className="block-child__subblock2">Рационы</div>
                                </a>
                                <div className="unit"> 
                                    <input type="text" className="food-restrictions__string" placeholder="Поиск по исполнителю" />
                                        <img src="{% static 'img/pencil.svg' %}" alt="" className="page-name__img2" />
                                        </div>
                                        <div className="choise-block__ingredients ingredients-block">
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 1</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 2</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 3</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 4</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 5</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 6</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 7</label>
                                            </a>
                                            <a href="" className="block-child2 Ch">
                                                <label className="block-child__subblock">Рацион 8</label>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="choise-block">
                                    <a className="block-child">
                                        <div className="block-child__subblock2">Пищевые компазиции</div>
                                    </a>
                                    <div className="unit"> 
                                        <input type="text" className="food-restrictions__string2" placeholder="Поиск по заказчику" />
                                            <img src="{% static 'img/pencil.svg' %}" alt="" className="page-name__img2" />
                                            </div>
                                            <div className="choise-block__ingredients ingredients-block">
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 1</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 2</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 3</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 4</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 5</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 6</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 7</label>
                                                </a>
                                                <a href="" className="block-child2 Ch2">
                                                    <label className="block-child__subblock">ПК 8</label>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                </>
                );
}

export default AcrhiveTechnology;