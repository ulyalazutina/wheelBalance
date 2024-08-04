import { ButtonModal } from "./Button.styled";

function Button({children, type}) {
    return <ButtonModal type={type}>{children}</ButtonModal>;
}

export default Button;

// кнопки
