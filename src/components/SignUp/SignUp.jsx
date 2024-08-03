import CommonModal from '../CommonModal/CommonModal';
import Input from '../Input/Input';

function SignUp() {
    return (
        <CommonModal>
            <h1>Регистрация</h1>
            <Input type='text' placeholder='Имя' id='name' />
            <Input type='email' placeholder='Почта' id='email' />
            <Input type='password' placeholder='Пароль' id='password' />
            <Input
                type='password'
                placeholder='Повторите пароль'
                id='password-repeat'
            />
        </CommonModal>
    );
}

export default SignUp;
