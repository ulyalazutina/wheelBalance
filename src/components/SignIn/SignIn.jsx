import { useState } from 'react';
import CommonModal from '../CommonModal/CommonModal';
import SignUp from '../SignUp/SignUp';
import Input from '../Input/Input';
import { H1 } from './SignIn.styled';
import Button from '../Button/Button';

function SignIn() {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            {isOpen ? (
                <SignUp />
            ) : (
                <CommonModal>
                    <H1>Авторизация</H1>
                    <Input type='email' placeholder='Почта' id='email' />
                    <Input type='password' placeholder='Пароль' id='password' />
                    <Button type='button'>Войти</Button>
                    <p onClick={showModal}>Зарегестрироваться?</p>
                </CommonModal>
            )}
        </>
    );
}

export default SignIn;
