import {Link} from 'react-router-dom'
import style from '../../css/login.module.css'
import google from '../../assets/images/google.png'


const ButtonDaftar = (props)=>{

    return (
        <div className={style.buttonLogin}>
                    <button 
                        className={style.buttonMasuk}
                        onClick={()=>{props.togleValidasi()}}
                        >Daftar
                    </button>
                <p>Atau</p>
                <button className={`${style.buttonMasuk} ${style.googlelogin}`}>
                    <img src={google} alt="Google"/> 
                    Daftar dengan Google
                </button>
            </div>
    )
}

export default ButtonDaftar;