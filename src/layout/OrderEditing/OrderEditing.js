import Header from "../../components/Header/Header";
import "./OrderEditing.css";

export default function OrderEditing() {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <div className="info">
            <span className="left">ОРГАНИЗАЦИЯ</span>{" "}
            <span className="right">
              <input type="text" placeholder="Имя пользователя" />
            </span>
          </div>

          <div className="info">
            <span className="left">ДАТА НАЧАЛА ПЕРИОДА</span>{" "}
            <span className="right">
              <input type="date" value="2022-11-29" />
            </span>
          </div>

          <div className="info">
            <span className="left">КОЛИЧЕСТВО ДНЕЙ</span>{" "}
            <span className="right">
              <select
                name="username"
                className="prohibited-ingredients__choice"
              >
                <option value="1" className="prohibited-ingredients__point">
                  7 (1 нед.)
                </option>
                <option value="2" className="prohibited-ingredients__point">
                  14 (2 нед.)
                </option>
                <option value="3" className="prohibited-ingredients__point">
                  21 (3 нед.)
                </option>
                <option value="4" className="prohibited-ingredients__point">
                  28 (4 нед.)
                </option>
                <option value="5" className="prohibited-ingredients__point">
                  35 (5 нед.)
                </option>
                <option value="6" className="prohibited-ingredients__point">
                  42 (6 нед.)
                </option>
                <option value="7" className="prohibited-ingredients__point">
                  49 (7 нед.)
                </option>
                <option value="8" className="prohibited-ingredients__point">
                  56 (8 нед.)
                </option>
              </select>
            </span>
          </div>

          <div className="info">
            <span className="left">ОПИСАНИЕ</span>{" "}
            <span className="right">
              <textarea
                className="b"
                id="description"
                type="text"
                value=""
                rows="5"
              ></textarea>
            </span>
          </div>

          <div className="info">
            <span className="left">ПРИЁМЫ ПИЩИ</span>{" "}
            <span className="right">
              <select
                name="username"
                className="prohibited-ingredients__choice"
              >
                <option value="1" className="prohibited-ingredients__point">
                  1
                </option>
                <option value="2" className="prohibited-ingredients__point">
                  2
                </option>
                <option value="3" className="prohibited-ingredients__point">
                  3
                </option>
                <option value="3" className="prohibited-ingredients__point">
                  4
                </option>
                <option value="3" className="prohibited-ingredients__point">
                  5
                </option>
              </select>
            </span>
          </div>

          <div className="info">
            <span className="left">ЗААРХИВИРОВАН</span>{" "}
            <span className="right rcheckbox">
              <input type="checkbox" />
            </span>
          </div>

          <div className="info info2">
            <span className="left">РЕДАКТОР</span>{" "}
            <span className="right">
              <input type="text" value="Иванов Сергей Сергеевич" />
            </span>
          </div>

          <div className="info">
            <span className="left" placeholder="Ограничение не выбрано">
              ОГРАНИЧЕНИЕ
            </span>
            <span className="right">
              <textarea
                disabled
                className="b"
                resize="none"
                id="description"
                type="text"
                value=""
                rows="5"
                placeholder="Ограничение не выбрано"
              ></textarea>
            </span>
            <span className="pass-icon" id="pass-icon">
              <a href="ration/restriction">
                <img
                  className="pass-icon2"
                  src="{% static 'img/pencil.png' %}"
                />
              </a>
            </span>
          </div>
          <div>
            <button
              className="button"
              id="save"
              onclick="window.location.href='/main'"
            >
              Сохранить
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
