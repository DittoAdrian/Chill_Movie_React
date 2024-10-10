import style from '../css/login.module.css'
import LoginBox from '../components/login-register/loginBox'

const LoginPage = ()=>{

    return (
    <div className={style.loginBox}>
        <LoginBox/>
    </div>
    )
}

export default LoginPage;

