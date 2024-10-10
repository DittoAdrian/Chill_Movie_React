import style from '../../css/login.module.css'
import logo from '../../assets/images/Chill-logo.svg'

const ChillLogo = () =>{
    return (
        <div className={style.formLogo}>
            <img src={logo} alt="Chill Logo"/>
            <h1>CHILL</h1>
        </div>
    )
}
export default ChillLogo;