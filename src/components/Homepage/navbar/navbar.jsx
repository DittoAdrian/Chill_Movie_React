import { useState } from "react";
import logo from "../../../assets/images/Chill-logo.svg";
import profilePic from "../../../assets/images/profile.png";
import arrowDown from "../../../assets/images/arrowDown.svg";
import DropDown from "./nav-dropdown";
import style from "../../../css/homepage.module.css";

const Navbar = () => {
  const [visibel, setVisibel] = useState(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_container}>
        <div className={style.menu}>
          <div className={style.logo}>
            <img src={logo} alt="Chill-Logo" />
            <h1>CHILL</h1>
          </div>
          <ul>
            <li>
              <a href="#">Film</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
            <li>
              <a href="#">Daftar Saya</a>
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
  );
};
export default Navbar;
