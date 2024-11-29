import Header from "../../components/Header";

export default function MedicalRestrictions() {
    return (
        <>
        <Header></Header>
    <main>
        <div className="wrapper">
        <form>
            <div className="prohibited-ingredients">
                  <form className="tables" method="post">
                      <div id="first" className="block">
                        <input className="a poisk" type="text" name="text" placeholder="Поиск болезни" maxlength="45"/>
                        <div className="ingredients-block">
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_1"/><label for="check_1">Диабет</label>
                                
                            </div> 
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_2"/><label for="check_2">Заболевание желудочно-кишечного тракта</label>
                                
                            </div>
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_3"/><label for="check_3">Болезнь почек</label>
                                
                            </div>
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_4"/><label for="check_4">Заболевание 1</label>
                                
                            </div>
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_5"/><label for="check_5">Заболевание 2</label>
                                
                            </div>
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_6"/><label for="check_6">Заболевание 3</label>
                                
                            </div>
                            <div className="Ch">
                                <input className="left right" type="checkbox" name="check_7"/><label for="check_7">Заболевание 4</label>
                                
                            </div>
                        </div>
                        
                      </div>
                
                
                      <div id="second" className="block">
                        <span className="a2">ВЫБРАННЫЕ ОГРАНИЧЕНИЯ:</span>
                        <div className="ingredients-block">
                            <div className="selected-ingredients__invisible">
                                <div className="selected-ingredients__text">Ничего не выбрано</div>
                            </div>
                        </div>
                      </div>
                
                      <div id="third" className="block">
                        <input className="a" type="text" placeholder="Название болезни"/>
                        
                        <textarea name="name" className="b" id="description" type ="text" value="" rows="2" placeholder="Особенности"></textarea>
                        <button name="button" className="button2 button__text2">
                            Добавить
                        </button>
                      </div>
                    </form>
            </div>
                <a href="javascript:history.back()" name="button" className="button button__text">
                    Сохранить
                </a>
        </form>
    </div>
    </main>
        </>
    );
}