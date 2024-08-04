import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './Global.styled.js';
import HomePage from './pages/HomePage/HomePage.jsx';
import SectionPage from './pages/SectionPage/SectionPage.jsx';
import WheelPage from './pages/WheelPage/WheelPage.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/choice-section' element={<SectionPage />} />
        <Route path="/wheel/:countSection" element={<WheelPage />} />
      </Routes>
    </>
  );
}

export default App;
