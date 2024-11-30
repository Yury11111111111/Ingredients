import './style/App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home/Home';
// import Archive from './layout/Archive/Archive';
// import Editor from './layout/Editor/Editor';
// import Profile from './layout/Profile/Profile';
import MainTech from './layout/MainTech/MainTech';
import AcrhiveTechnology from './layout/ArchiveTechnology/ArchiveTechnology';

import Entrance from './layout/Entrance/Entrance';
import GlavManager from './layout/GlavManager/GlavManager';
import IngredientRestructions from './layout/IngredientRestructions/IngredientRestructions';
import LogDev from './layout/LogDev/LogDev';
import MedicalRestrictions from './layout/MedicalRestrictions/MedicalRestrictions';
import ProsmotrVsehOgr from './layout/ProsmotrVsehOgr/ProsmotrVsehOgr';
import RedactDiet from './layout/RedactDiet/RedactDiet';
import RedactRationM from './layout/RedactRationM/RedactRationM';
import BasInfAboutRation from './layout/BasInfAboutRation/BasInfAboutRation';
import RedactRation from './layout/RedactRation/RedactRation';
import Redactirovanie from './layout/Redactirovanie/Redactirovanie';
import Registr from './layout/Registration/Registr';
import ReligionRestrictions from './layout/ReligionRestrictions/ReligionRestrictions';
import Restrictions from './layout/Restrictions/Restriction';
import SozdanieIngredientOgranich from './layout/SozdanieIngredientOgranich/SozdanieIngredientOgranich';
import SozdanieMedicalOgranich from './layout/SozdanieMedicalOgranich/SozdanieMedicalOgranich';
import SozdanieOgranichPoIngred from './layout/SozdanieOgranichPoIngred/SozdanieOgranichPoIngred';
import SozdaniePk from './layout/SozdaniePk/SozdaniePk';
import SozdanieRation from './layout/SozdanieRation/SozdanieRation';
import SozdanieRationForPk from './layout/SozdanieRationForPk/SozdanieRationForPk';
import SozdanieReligionOgranich from './layout/SozdanieReligionOgranich/SozdanieReligionOgranich';
import SignIn from './layout/SignIn/SignIn';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {/* <Route path='/archive' element={<Archive />} />
      <Route path='/editor' element={<Editor />} />
      <Route path='/profile' element={<Profile />} /> */}
      <Route path='/tech' element={<MainTech />} />

      <Route path='/ArchiveTechnology' element={<AcrhiveTechnology />} />

      <Route path='/BasInfAboutRation' element={<BasInfAboutRation />} />
      <Route path='/Entrance' element={<Entrance/>} />
      <Route path='/GlavManager' element={<GlavManager />} />
      <Route path='/IngredientRestructions' element={<IngredientRestructions />} />
      <Route path='/LogDev' element={<LogDev />} />
      <Route path='/MedicalRestrictions' element={<MedicalRestrictions />} />
      <Route path='/ProsmotrVsehOgr' element={<ProsmotrVsehOgr />} />
      <Route path='/RedactDiet' element={<RedactDiet />} />
      <Route path='/RedactRationM' element={<RedactRationM />} />

      <Route path='/RedactRation' element={<RedactRation />} />
      <Route path='/Redactirovanie' element={<Redactirovanie/>} />
      <Route path='/Registration' element={<Registr />} />
      <Route path='/ReligionRestrictions' element={<ReligionRestrictions />} />
      <Route path='/Restrictions' element={<Restrictions />} />
      <Route path='/SozdanieIngredientOgranich' element={<SozdanieIngredientOgranich />} />
      <Route path='/SozdanieMedicalOgranich' element={<SozdanieMedicalOgranich />} />
      <Route path='/SozdanieOgranichPoIngred' element={<SozdanieOgranichPoIngred />} />
      <Route path='/SozdaniePk' element={<SozdaniePk />} />
      <Route path='/SozdanieRation' element={<SozdanieRation />} />
      <Route path='/SozdanieRationForPk' element={<SozdanieRationForPk />} />
      <Route path='/SozdanieReligionOgranich' element={<SozdanieReligionOgranich />} />
      <Route path='/SignIn' element={<SignIn />} />


    </Routes>
  );
}

export default App;
