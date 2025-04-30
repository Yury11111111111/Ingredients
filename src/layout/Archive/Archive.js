import Header from "../../components/Header/Header";
import "./Archive.css"

export default function Archive() {

  return (
    <>
      <Header></Header>
      <main>
        <div className="wrapper">
          <form>
            <div className="prohibited-ingredients">
              <div className="choise-block">
                <div className="unit">
                  <input id="text-to-find" autofocus type="text" className="food-restrictions__string"
                    placeholder="Поиск по исполнителю" />
                  <img src="{% static 'img/pencil.svg' %}" alt="" className="page-name__img2" />
                </div>
                <div className="choise-block__ingredients ingredients-block">
                  <a href="arhiv_koncretnogo_techn?text=Технолог 1" className="block-child Ch">
                    <label id="r1" className="block-child__subblock">Технолог 1</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Технолог 2" className="block-child Ch">
                    <label className="block-child__subblock">Технолог 2</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Технолог 3" className="block-child Ch">
                    <label className="block-child__subblock">Технолог 3</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Технолог 4" className="block-child Ch">
                    <label className="block-child__subblock">Технолог 4</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Технолог 5" className="block-child Ch">
                    <label className="block-child__subblock">Технолог 5</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Технолог 6" className="block-child Ch">
                    <label className="block-child__subblock">Рыба</label>
                  </a>
                </div>
              </div>
            </div>
            <div className="actions">
              <div className="choise-block">
                <div className="food-restrictions3">
                  <div className="unit">
                    <input type="text" className="food-restrictions__string2" placeholder="Поиск по заказчику" />
                    <img src="{% static 'JS/pencil.js' %}" alt="" className="page-name__img2" />
                  </div>
                </div>
                <div className="choise-block__ingredients ingredients-block">
                  <a href="arhiv_koncretnogo_techn?text=Заказчик 1" className="block-child Ch2">
                    <label className="block-child__subblock">Заказчик 1</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Заказчик 2" className="block-child Ch2">
                    <label className="block-child__subblock">Заказчик 2</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Заказчик 3" className="block-child Ch2">
                    <label className="block-child__subblock">Заказчик 3</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Заказчик 4" className="block-child">
                    <label className="block-child__subblock">Заказчик 4</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Заказчик 5" className="block-child Ch2">
                    <label className="block-child__subblock">Заказчик 5</label>
                  </a>
                  <a href="arhiv_koncretnogo_techn?text=Заказчик 6" className="block-child Ch2">
                    <label className="block-child__subblock">Заказчик 6</label>
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
