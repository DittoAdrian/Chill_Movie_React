import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import useData from '../../store/Data';
import style from '../../css/login.module.css'
import ChillLogo from './logo';
import InputUername from './Username'
import InputPassword from './Password'
import ButtonMasuk from './ButtonMasuk';

const LoginBox = ()=>{

    const {usersData,updateUserLogin,userLogin} = useData()
    const [usernameValue,setUsernameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [warningUname,setWarningUname] = useState(false)
    const [warningPass,setWarningPass] = useState(false)
    const navigate = useNavigate();


    const loginValidasi = ()=>{
        for (const user of usersData){
            if (user.username === usernameValue && user.password === passwordValue){
                return (updateUserLogin(user.username),navigate('/homepage'))
            }
        }
        {usernameValue? setWarningUname(false):setWarningUname(true)}
        {passwordValue? setWarningPass(false) : setWarningPass(true)}  

        return alert('username dan password salah')
    }



    return(
         <div className={style.formBox}>
            {/* Logo */}
            <ChillLogo/>

            {/* Greating */}
            <div className={style.formGreeting}>
                <h2>Masuk</h2>
                <p>Selemat datang kembali</p>
            </div>

            {/* Form Input */}
            <form className={style.inputLogin}>
                <InputUername togleUsernameValue={(e)=>{setUsernameValue(e)}} warning={warningUname}/>
                <InputPassword toglePasswordValue={(e)=>{setPasswordValue(e)}} warning={warningPass}/>
            </form>

            {/* Daftar */}
            <div className={style.daftar}>
                <p>Belum punya akun?<Link to='/register'>Daftar</Link></p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Lupa Password?</a>
            </div>
            
            <ButtonMasuk 
            togleMasuk={loginValidasi}
            />

         </div>
    )
}

export default LoginBox;