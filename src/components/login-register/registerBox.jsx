import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import useData from "../../store/Data";
import style from "../../css/login.module.css";
import ChillLogo from "./logo";
import InputUername from "./Username";
import InputPassword from "./Password";
import ButtonDaftar from "./ButtonDaftar";

const RegisterBox = () => {
  const { usersData, updateUsersData,autoIncrementId} = useData();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValue2, setPasswordValue2] = useState("");
  const [warningReg,setWarningReg] = useState(0);
  const navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL;

  const [fetchUsersData,setFetchUsersData] = useState([])

  useEffect(()=>{
    async function fetchUsers(){
      const res = await fetch(`${API_URL}/users`);
      const data = await res.json();
      setFetchUsersData(data)
      console.log(data)
      console.log(usersData)
    };
    fetchUsers();
  },[])

  const validasi = () => {
    if (usernameValue){
      const foundUser = fetchUsersData.find((user) => user.username === usernameValue)
      if(!foundUser){
        if (passwordValue) {
          if(passwordValue === passwordValue2){

            const dataUser = {
              username : usernameValue,
              password : passwordValue,
              email : `${usernameValue}@gmail.com`
            };

            axios.post(`${API_URL}/users`, dataUser)
            .then(response => {
                console.log('Data berhasil dikirim:', response.data);
            })
            .catch(error => {
                console.error('Ada kesalahan saat mengirim data:', error);
            });

            // updateUsersData(dataUser);

            autoIncrementId();

            alert('data telah dibuat');
            navigate('/login');
          }
          else{setWarningReg(4),console.log(4)}
        }
        else{setWarningReg(3),console.log(3)}
      }
      else{setWarningReg(2),console.log(2)}
    }
    else{setWarningReg(1),console.log(1)}

    
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
