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
import RedactRation from './layout/RedactRationM/RedactRationM';
import BasInfAboutRation from './layout/BasInfAboutRation/BasInfAboutRation';

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
      <Route path='/RedactRation' element={<RedactRation />} />


    </Routes>
  );
}

export default App;
