import { useState } from "react";
import CommonModal from "../CommonModal/CommonModal";
import SignUp from "../SignUp/SignUp";
import Input from "../Input/Input";

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
                    <h1>Авторизация</h1>
                    <Input type="email" placeholder="Почта" id="email" />
                    <Input type="password" placeholder="Пароль" id="password" />
                    <p onClick={showModal}>Зарегестрироваться?</p>
                </CommonModal>
            )}
        </>
    );
}

export default SignIn;
