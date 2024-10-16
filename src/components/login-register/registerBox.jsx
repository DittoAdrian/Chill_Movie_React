import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import useData from "../../store/Data";
import style from "../../css/login.module.css";
import ChillLogo from "./logo";
import InputUername from "./Username";
import InputPassword from "./Password";
import ButtonDaftar from "./ButtonDaftar";

const RegisterBox = () => {
  const { usersData, updateUsersData} = useData();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValue2, setPasswordValue2] = useState("");
  const [warningReg,setWarningReg] = useState(0);
  const navigate = useNavigate()

  const validasi = () => {
    if (usernameValue){
      const foundUser = usersData.find((user) => user.username === usernameValue)
      if(!foundUser){
        if (passwordValue) {
          if(passwordValue === passwordValue2){
            const dataUser = {
              username : usernameValue,
              password : passwordValue,
              email : `${usernameValue}@gmail.com`
            }
            updateUsersData(dataUser)
            alert('data telah dibuat')
            navigate('/login')
          }
          else{setWarningReg(4),console.log(4)}
        }
        else{setWarningReg(3),console.log(3)}
      }
      else{setWarningReg(2),console.log(2)}
    }
    else{setWarningReg(1),console.log(1)}

    console.log(usersData)

    
    // if (usernameValue && passwordValue && passwordValue2) {
    //   if (passwordValue === passwordValue2) {
    //     const foundUser = usersData.find(
    //       (user) => user.username === usernameValue
    //     );
    //     if (foundUser) {
    //       console.log("id sudah digunakan");
    //     } else {
    //       console.log("data dibuat");
    //     }
    //   } else {
    //     console.log("password berbeda");
    //   }
    // } else {
    //   console.log("data perlu di isi");
    // }
  };
  console.log(usersData)
  return (
    <div className={style.formBoxRegister}>
      
      {/* Logo */}
      <ChillLogo />

      {/* Greating */}
      <div className={style.formGreeting}>
        <h2>Daftar</h2>
        <p>Selemat datang</p>
      </div>

      {/* Form Input */}
      <form className={style.inputLogin}>
        <InputUername
          togleUsernameValue={(e) => {setUsernameValue(e);}}
          warningReg={warningReg}
        />
        <InputPassword
          toglePasswordValue={(e) => {setPasswordValue(e);}}
          warningReg={warningReg}
        />
        <InputPassword
          title={"Konfirmasi Kata Sandi"}
          toglePasswordValue={(e) => {setPasswordValue2(e);}}
          warningReg={warningReg}
        />
      </form>

      {/* Daftar */}
      <div className={style.daftar}>
        <p>
          Sudah punya akun?<Link to="/login">Masuk</Link>
        </p>
      </div>

      {/* Button Daftar */}
      <ButtonDaftar togleValidasi={validasi} />
    </div>
  );
};

export default RegisterBox;
