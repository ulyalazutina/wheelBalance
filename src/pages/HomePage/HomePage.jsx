import { useState } from 'react';
import { Div, H1, Pdesc, Plink, Span, } from './HomePage.styled';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Div>
      <H1>Колесо баланса</H1>
      <Pdesc>
         Это инструмент, который используется для визуализации и
        оценки различных аспектов жизни человека. Он помогает выявить области, в
        которых человек может быть удовлетворен, а также те, которые требуют
        внимания и улучшения.
      </Pdesc>
      <Plink to={"/choice-section"}>
        Сделать свое колесо баланса
        {/* <Span onClick={showModal}>Войдите</Span> в свой аккаунт, чтобы сделать
        свое колесо баланса */}
      </Plink>
      {/* {isOpen && <SignIn />} */}
    </Div>
  );
}

export default HomePage;
