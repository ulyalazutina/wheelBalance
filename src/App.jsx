import { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <p>
        Колесо баланса — это инструмент, который используется для визуализации и
        оценки различных аспектов жизни человека. Оно помогает выявить области,
        в которых человек может быть удовлетворен, а также те, которые требуют
        внимания и улучшения.{' '}
      </p>
      <p>
        <span onClick={showModal}>Войдите</span> в свой аккаунт, чтобы сделать
        свое колесо баланса
      </p>
      {isOpen && <SignIn />}
    </div>
  );
}

export default App;
