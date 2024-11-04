import {Link,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
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


    const [fetchUsersData,setFetchUsersData] = useState([])
    useEffect(()=>{
      async function fetchUsers(){
        const res = await fetch('https://672643ab302d03037e6cf4b5.mockapi.io/users');
        const data = await res.json();
        setFetchUsersData(data)
      }
      fetchUsers();
    },[])

    const loginValidasi = ()=>{
        for (const user of fetchUsersData){
            if (user.username === usernameValue && user.password === passwordValue){
                return (updateUserLogin(user.id),navigate('/homepage'))
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
                <InputUername togleUsernameValue={(e)=>{setUsernameValue(e)}} warning={warningUname} togleMasuk={loginValidasi}/>
                <InputPassword toglePasswordValue={(e)=>{setPasswordValue(e)}} warning={warningPass} togleMasuk={loginValidasi}/>
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