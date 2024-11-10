import {Link,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { updateUser } from '../../store/redux/slices/slice';
import style from '../../css/login.module.css'
import ChillLogo from './logo';
import InputUername from './Username'
import InputPassword from './Password'
import ButtonMasuk from './ButtonMasuk';
import { fetchUsers } from '../../services/api';

const LoginBox = ()=>{

    const [usernameValue,setUsernameValue] = useState('') //Menyimpan data Inputan
    const [passwordValue, setPasswordValue] = useState('')
    const [warningUname,setWarningUname] = useState(false) //State kondisi untuk notifikasi inputan
    const [warningPass,setWarningPass] = useState(false)
    const navigate = useNavigate(); // Navigate untuk meneruskan User ke Homepagea
    const dispatch = useDispatch(); // Trigger Reducer untuk merubah data
    const userLogin2 = useSelector((state)=>state.login.id)

    // Mengarahkan langsung user yang sudah login ke Homepage
    useEffect(()=>{
        if(userLogin2){
            navigate('/homepage')
        }
    },[])

    // Validasi Username & Password Login
    const loginValidasi = async ()=>{
        try{
            const data = await fetchUsers();
            for (const user of data){
            if (user.username === usernameValue && user.password === passwordValue){
                return (
                    dispatch(updateUser({id: user.id})),
                    navigate('/homepage')
                )
            }}
            {usernameValue? setWarningUname(false):setWarningUname(true)}
            {passwordValue? setWarningPass(false) : setWarningPass(true)}  
            return alert('username dan password salah')
        }
        catch(error){
            console.log("Gagal Login : ", error)
        }
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