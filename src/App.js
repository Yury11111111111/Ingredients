import "./style/App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home/Home";
import Archive from "./layout/Archive/Archive";

// import Profile from './layout/Profile/Profile';
import MainTech from "./layout/MainTech/MainTech";
import AcrhiveTechnology from "./layout/ArchiveTechnology/ArchiveTechnology";

import MainManager from "./layout/MainManager/MainManager";
import LogDev from "./layout/LogDev/LogDev";
import MedicalRestrictions from "./layout/MedicalRestrictions/MedicalRestrictions";
import ViewAllRestrictions from "./layout/ViewAllRestrictions/ViewAllRestrictions";
import DietEditing from "./layout/DietEditing/DietEditing";
import BasicInfAboutRation from "./layout/BasicInfAboutRation/BasicInfAboutRation";
import OrderEditing from "./layout/OrderEditing/OrderEditing";
import Registration from "./layout/Registration/Registration";
import ReligionRestrictions from "./layout/ReligionRestrictions/ReligionRestrictions";
import CreatingRacionRestrictions from "./layout/CreatingRacionRestrictions/CreatingRacionRestrictions";
import IngredientRestructions from "./layout/IngredientRestructions/IngredientRestructions";
import CreatingMedicalRestrictions from "./layout/CreatingMedicalRestrictions/CreatingMedicalRestrictions";
import CreatingIngredientRestriction from "./layout/CreatingIngredientRestriction/CreatingIngredientRestriction";
import CreatingPk from "./layout/CreatingPk/CreatingPk";
import CreatingRation from "./layout/CreatingRation/CreatingRation";
import CreatingRationForPk from "./layout/CreatingRationForPk/CreatingRationForPk";
import CreatingReligiousRestriction from "./layout/CreatingReligiousRestriction/CreatingReligiousRestriction";
import SignIn from "./layout/SignIn/SignIn";

/* 
    path('admin/', admin.site.urls),
    path('', vhod_func, name='vhod'),
    path('vhod/', vhod_func, name='vhod'),
    path('arhiv/', arhiv_func, name='arhiv'),
    path('arhiv/<int:technologist_id>/', arhiv_func, name='arhiv_technologist'),
    path('main/', glav_techn_func, name='main'),
    path('ration/', bas_inf_about_ration_func, name='ration'),
    path('ration/registration/', registration, name='registration'),
    path('registration/', registration, name='registration'),
    path('ration/restrictions/medical/', medical_restrictions_func, name='medical_restrictions'),
    path('ration/restrictions/religion/', religion_restrictions_func, name='religion_restrictions'),
    path('ration/restrictions/ingredients/', ingredient_restructions_func, name='ingredient_restrictions'),
    # создание питания
    path('pk/create/', sozdanie_pk_func, name='create_pk'),
    path('ration/create/for_pk/', sozdanie_ration_for_pk_func, name='create_ration_for_pk'),
    path('ration/redact/', redact_ration_func, name='redact_ration'),

    # удаление рациона
    path('ration/delete/<int:ration_id>/', delete_ration, name='delete_ration'),
    # главная страница
    path('main/ration/', bas_inf_about_ration_func, name='main_ration'),
    # ограничения
    path('ration/restrictions/', restrictions, name='restrictions'),
    # ограничения по ингредиентам
    path('ration/restrictions/ingredient_restructions/', ingredient_restructions_func, name='ingredient_restrictions'),
    # ограничения по медицинским показаниям
    path('ration/restrictions/medical_restrictions/', medical_restrictions_func, name='medical_restrictions'),
    # ограничения по религиозным показаниям
    path('ration/restrictions/religion_restrictions/', religion_restrictions_func, name='religion_restrictions'),
    path('ration/sozdanie/', sozdanie_ration_func, name='sozdanie_ration'),
    */

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Archive" element={<Archive />} />

      {/* <Route path='/profile' element={<Profile />} /> */}
      <Route path="/MainTech" element={<MainTech />} />

      <Route path="/ArchiveTechnology" element={<AcrhiveTechnology />} />

      <Route path="/BasicInfAboutRation" element={<BasicInfAboutRation />} />
      <Route path="/MainManager" element={<MainManager />} />
      <Route
        path="/IngredientRestructions"
        element={<IngredientRestructions />}
      />
      <Route path="/LogDev" element={<LogDev />} />
      <Route path="/MedicalRestrictions" element={<MedicalRestrictions />} />
      <Route path="/ViewAllRestrictions" element={<ViewAllRestrictions />} />
      <Route path="/DietEditing" element={<DietEditing />} />

      <Route path="/OrderEditing" element={<OrderEditing />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/ReligionRestrictions" element={<ReligionRestrictions />} />
      <Route
        path="/CreatingRacionRestrictions"
        element={<CreatingRacionRestrictions />}
      />
      <Route
        path="/CreatingMedicalRestrictions"
        element={<CreatingMedicalRestrictions />}
      />
      <Route
        path="/CreatingIngredientRestriction"
        element={<CreatingIngredientRestriction />}
      />
      <Route path="/CreatingPk" element={<CreatingPk />} />
      <Route path="/CreatingRation" element={<CreatingRation />} />
      <Route path="/CreatingRationForPk" element={<CreatingRationForPk />} />
      <Route
        path="/CreatingReligiousRestriction"
        element={<CreatingReligiousRestriction />}
      />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
}
