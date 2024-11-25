import './style/App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home/Home';
import Archive from './layout/Archive/Archive';
import Editor from './layout/Editor/Editor';
import Profile from './layout/Profile/Profile';
import MainTech from './layout/MainTech/MainTech';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/editor' element={<Editor/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/maintech' element={<MainTech/>}/>
    </Routes>
  );
}

export default App;
