import style from '../css/login.module.css';
import RegisterBox from '../components/login-register/registerBox';

const RegisterPage = ()=>{

    return (
    <div className={style.loginBox}>
        <RegisterBox/>
    </div>
    )
}

export default RegisterPage;