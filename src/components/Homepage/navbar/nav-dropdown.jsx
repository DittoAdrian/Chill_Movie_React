import style from '../../../css/homepage.module.css'
import dropDown1 from '../../../assets/images/dropDown1.png'
import dropDown2 from '../../../assets/images/dropDown2.png'
import dropDown3 from '../../../assets/images/dropDown3.png'
import { Link } from 'react-router-dom'

const DropDown = (props)=>{
    
    return (
    <div className={`${style.dropDown} ${props.visibel? style.active:''}`}>
        <a href="#">
            <img src={dropDown1} alt=""/>
            <p>Profile Saya</p>
        </a>
        <a href="#">
            <img src={dropDown2} alt=""/>
            <p>Ubah Premium</p>
        </a>
        <Link to="/">
            <img src={dropDown3} alt=""/>
            <p>keluar</p>
        </Link>
    </div>
    )
}

export default DropDown;