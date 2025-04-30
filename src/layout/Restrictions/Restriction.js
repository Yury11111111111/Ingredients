import "./Restriction.css";

export default function Restrictions() {
    return (
        <>
            <nav className="navigation noselect">
                <div className="navigation__extra-block">
                    <div className="navigation__menu">
                        <div className="navigation__title logo-block">
                            <span className="logo-block__text">Taste</span>
                        </div>
                        <div className="navigation__title">
                            <a href="#" className="navigation__link" tabIndex="1">Главная</a>
                        </div>
                        <div className="navigation__title">
                            <a href="#" className="navigation__link" tabIndex="2">Архив</a>
                        </div>
                        <div className="navigation__title">
                            <a href="#" className="navigation__link" tabIndex="3">Редактор</a>
                        </div>
                        <div className="navigation__title">
                            <a href="#" className="navigation__link" tabIndex="4">Профиль</a>
                        </div>
                        <img src="{% static 'img/question.svg' %}" alt="" className="navigation__img navigation__img_margin-88" />
                    </div>
                    <div className="page-name">
                        <span className="page-name__title"></span>
                    </div>
                    <div className="big-title">Ограничения</div>
                </div>
            </nav>
            <main className="main">
                <section className="wrapper">
                    <div className="restrictions">
                        {renderRestrictionSections()}
                    </div>
                </section>
                <form action="restrictions/table" className="form">
                    <button type="submit" className="button">Сформировать рацион</button>
                </form>
            </main>
        </>
    );
}

function renderRestrictionSections() {
    const sections = [
        { name: 'МЕДИЦИНСКИЕ', link: 'restrictions/medical_restrictions' },
        { name: 'РЕЛИГИОЗНЫЕ', link: 'restrictions/religion_restrictions' },
        { name: 'ПО ИНГРЕДИЕНТАМ', link: 'restrictions/ingredient_restructions' }
    ];

    return sections.map(section => (
        <div className="restrictions__main-restriction" key={section.name}>
            <div className="restrictions__restriction-christianity">
                <a href={section.link} className="restrictions__name-restriction">{section.name}</a>
                <a href="#" className="restrictions__pen">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                    </svg>
                </a>
            </div>
            <div className="restrictions__restriction-select">
                <p className="restrictions__unit-title">ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:</p>
                <div className="restrictions__units">
                    <input id={`check-${section.name}`} type="checkbox" value={`${section.name} ограничение`} />
                    <label htmlFor={`check-${section.name}`} className="restrictions__unit">{section.name}</label>
                </div>
            </div>
        </div>
    ));
}
