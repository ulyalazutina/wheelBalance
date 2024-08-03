import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './Global.styled.js';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
