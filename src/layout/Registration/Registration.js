import Header from "../../components/Header/Header";
import "./Registration.css"

export default function Registration() {
  return (
    <>
      <Header />
      <nav>
        <div className="page-name">
          <div className="food-restrictions__title">Регистрация</div>
        </div>
      </nav>
      <main>
        <div className="wrapper">
          <div>
            <img
              className="c"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGntfrDaO7qA6yme4fN6zkePqXRgwh_LGm0JPl1mUf3jpLYF8oWhjZJS-on2hllsDwGGQ&usqp=CAU"
              style={{ width: "160px", height: "160px" }}
              name="picture"
              id="picture"
              alt="Profile"
            />
          </div>
          <div className="container">
            <input
              type="text"
              className="p"
              placeholder="ФИО"
              maxLength="45"
              name="FIO"
              id="FIO"
            />
            <input
              type="text"
              className="p"
              placeholder="Роль"
              maxLength="45"
              name="Role"
              id="Role"
            />
            <input
              type="text"
              className="p"
              placeholder="Должность"
              maxLength="45"
              name="Post"
              id="Post"
            />
            <input
              type="email"
              className="p"
              placeholder="Электронная почта"
              maxLength="45"
              name="Email"
              id="Email"
            />
          </div>
          <form action="maint">
            <div className="container2">
              <button className="button button-blue">Зарегистрировать</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
