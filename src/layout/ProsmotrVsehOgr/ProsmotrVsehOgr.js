import Header from "../../components/Header";

export default function ProsmotrVsehOgr() {
    return (
        <>
   <Header></Header>
        <main>
          <h1 className="main__heading">ОГРАНИЧЕНИЯ</h1>  
          <div className="wrapper">
                <div className="main__religions1">        
                    <div className="religions__christianity">
                      МЕДИЦИНСКИЕ
                    </div>
                    <div className="religions__select b">
                      <a href="redact_diet?text=Медицинские ограничения">
                        Диеты
                      </a>  
                    </div>
                    <div className="religions__select2">
                      <div className="unit b2"> 
                        <label className="a" for="add_sick">Диабет</label>
                      </div>
                    </div>
                    <div className="religions__select3 b">
                      <a href="sozdanie_medical_ogranich">
                        Ограничения
                      </a>  
                    </div>
                    <div className="religions__select4">
                      <div className="unit b2">
                        <label className="a" for="add_sick">Молочные продукты</label>
                      </div>
                    </div>
                </div>

                <div className="main__religions2">        
                  <div className="religions__christianity">
                    РЕЛИГИОЗНЫЕ
                  </div>
                  <div className="religions__select b">
                    <a href="redact_diet?text=Религиозные ограничения">
                      Диеты
                    </a>  
                  </div>
                  <div className="religions__select2">
                    <div className="unit b2"> 
                      <label className="a" for="add_sick">Православный пост</label>
                    </div>
                  </div>
                  <div className="religions__select3 b">
                    <a href="sozdanie_religion_ogranich">
                      Ограничения
                    </a>  
                  </div>
                  <div className="religions__select4 ">
                    <div className="unit b2"> 
                      <label className="a" for="add_sick">Рыба</label>
                    </div>
                  </div>
                </div>

                <div className="main__religions3">        
                  <div className="religions__christianity">
                    ПО ИНГРЕДИЕНТАМ
                  </div>
                  <div className="religions__select b">
                    <a href="redact_diet?text=Ограничения по ингредиентам">
                      Диеты
                    </a>  
                  </div>
                  <div className="religions__select2">
                    <div className="unit b2">
                      <label className="a" for="add_sick">Грибы</label>
                    </div>
                  </div>
                  <div className="religions__select3 b">
                    <a href="sozdanie_ingredient_ogranich">
                      Ограничения
                    </a>  
                  </div>
                  <div className="religions__select4">
                    <div className="unit b2">
                      <label className="a" for="add_sick">Рыба</label>
                    </div>
                  </div>
                </div>
          </div>
          <form action="ration">
            <button name="button" className="button button__text">
                Готово
            </button> 
        </form>   
        </main>
        </>
    );
}