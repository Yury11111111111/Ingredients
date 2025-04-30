import "./style/App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home/Home";
import Archive from "./layout/Archive/Archive";

// import Profile from './layout/Profile/Profile';
import MainTech from "./layout/MainTech/MainTech";
import AcrhiveTechnology from "./layout/ArchiveTechnology/ArchiveTechnology";

import MainManager from "./layout/MainManager/MainManager";
import IngredientRestructions from "./layout/IngredientRestructions/IngredientRestructions";
import LogDev from "./layout/LogDev/LogDev";
import MedicalRestrictions from "./layout/MedicalRestrictions/MedicalRestrictions";
import ViewAllRestrictions from "./layout/ViewAllRestrictions/ViewAllRestrictions";
import DietEditing from "./layout/DietEditing/DietEditing";
import BasicInfAboutRation from "./layout/BasicInfAboutRation/BasicInfAboutRation";
import OrderEditing from "./layout/OrderEditing/OrderEditing";
import Registration from "./layout/Registration/Registration";
import ReligionRestrictions from "./layout/ReligionRestrictions/ReligionRestrictions";
import Restrictions from "./layout/Restrictions/Restriction";
import IngredientRestriction from "./layout/IngredientRestriction/IngredientRestriction";
import CreatingMedicalRestrictions from "./layout/CreatingMedicalRestrictions/CreatingMedicalRestrictions";
import CreatingIngredientRestriction from "./layout/CreatingIngredientRestriction/CreatingIngredientRestriction";
import CreatingPk from "./layout/CreatingPk/CreatingPk";
import CreatingRation from "./layout/CreatingRation/CreatingRation";
import CreatingRationForPk from "./layout/CreatingRationForPk/CreatingRationForPk";
import CreatingReligiousRestriction from "./layout/CreatingReligiousRestriction/CreatingReligiousRestriction";
import SignIn from "./layout/SignIn/SignIn";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Archive" element={<Archive />} />

      {/* <Route path='/profile' element={<Profile />} /> */}
      <Route path="/MainTech" element={<MainTech />} />

      <Route path="/ArchiveTechnology" element={<AcrhiveTechnology />} />

      <Route
        path="/BasicInfAboutRation"
        element={<BasicInfAboutRation />}
      />
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
      <Route path="/Restrictions" element={<Restrictions />} />
      <Route
        path="/IngredientRestriction"
        element={<IngredientRestriction />}
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
