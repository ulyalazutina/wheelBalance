import { Form } from "./CommonModal.styled";

function CommonModal({ children }) {
    return <Form action="#">{children}</Form>;
}

export default CommonModal;

// обертка для модалок
