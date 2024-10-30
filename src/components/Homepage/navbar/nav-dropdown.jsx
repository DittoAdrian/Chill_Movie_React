import style from '../../../css/homepage.module.css'
import dropDown1 from '../../../assets/images/dropDown1.png'
import dropDown2 from '../../../assets/images/dropDown2.png'
import dropDown3 from '../../../assets/images/dropDown3.png'
import { NavLink } from 'react-router-dom'

const DropDown = (props)=>{
    
    return (
    <div className={`${style.dropDown} ${props.visibel? style.active:''}`}>
        <NavLink to='/homepage/profile'>
            <img src={dropDown1} alt=""/>
            <p>Profile Saya</p>
        </NavLink>
        <a href="#">
            <img src={dropDown2} alt=""/>
            <p>Ubah Premium</p>
        </a>
        <NavLink to="/">
            <img src={dropDown3} alt=""/>
            <p>keluar</p>
        </NavLink>
    </div>
    )
}

export default DropDown;