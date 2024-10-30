import { NavLink,Outlet } from "react-router-dom";
import { useState } from "react";
import ChillLogo from '../../../assets/images/Chill-Logo.svg';
import profilePic from "../../../assets/images/profile.png";
import arrowDown from "../../../assets/images/arrowDown.svg";
import DropDown from "./nav-dropdown";
import style from "../../../css/homepage.module.css";

const Navbar = () => {
  const [visibel, setVisibel] = useState(false);
  const classes = ({ isActive,isPending })=>{return  isPending?'ButtonLink':isActive?'ButtonLinkActive':''}


  return (
    <>
    <nav className={style.navbar}>
      <div className={style.navbar_container}>
        <div className={style.menu}>
          <div className={style.logo}>
            <img src={ChillLogo} alt="Chill-Logo" />
            <h1>CHILL</h1>
          </div>
          <ul>
            <li>
              <NavLink className={classes} to='/homepage'>Film</NavLink>
            </li>
            <li>
              <NavLink className={classes} to='/homepage'>Series</NavLink>
            </li>
            <li>
              <NavLink className={classes} to='/homepage/daftar-saya'>Daftar Saya</NavLink>
            </li>
          </ul>
        </div>

        <div className={style.profile}>
          <img src={profilePic} alt="Profile" />
          <img
            src={arrowDown}
            className={`${style.butoonDrop} ${visibel ? style.rotate : ""}`}
            onClick={() => {
              setVisibel(!visibel);
            }}
          />
        </div>
        <DropDown visibel={visibel} />
      </div>
    </nav>
    <Outlet></Outlet>
    </>
  );
};
export default Navbar;
