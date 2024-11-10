import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import useData from "../../store/Data"; // tidak digunakan
import style from "../../css/login.module.css";
import ChillLogo from "./logo";
import InputUername from "./Username";
import InputPassword from "./Password";
import ButtonDaftar from "./ButtonDaftar";
import { fetchUsers, fetchPostUser  } from "../../services/api";

const RegisterBox = () => {
  const { usersData, updateUsersData,autoIncrementId} = useData(); //zustand tidak digunakan
  const [usernameValue, setUsernameValue] = useState(""); // Menyimpan value Input
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValue2, setPasswordValue2] = useState("");
  const [warningReg,setWarningReg] = useState(0); // state notifikasi warning
  const navigate = useNavigate()

  const API_URL = import.meta.env.VITE_API_URL;

  const [fetchUsersData,setFetchUsersData] = useState([])
  useEffect(()=>{
    async function fetchUsers(){
      const res = await fetch(`${API_URL}/users`);
      const data = await res.json();
      setFetchUsersData(data)
      console.log(data)
    };
    fetchUsers();
  },[])

  // Validasi data inputan dengan data pada MockApi, lalu melakukan post pada data
  const validasi = async () => {
    if (usernameValue){
      const fetchDataUsers = await fetchUsers()
      const foundUser = await fetchDataUsers.find((user) => user.username === usernameValue)
      if(!foundUser){
        if (passwordValue) {
          if(passwordValue === passwordValue2){

            const dataUser = {
              username : usernameValue,
              password : passwordValue,
              email : `${usernameValue}@gmail.com`
            };

            try{
              await fetchPostUser(dataUser);
              alert("Akun Berhasil Dibuat!");
              navigate('/login');
            }
            catch(err){
              alert("Akun gagal Dibuat")
            }

          }
          else{setWarningReg(4),console.log('code :',4)}
        }
        else{setWarningReg(3),console.log('code :',3)}
      }
      else{setWarningReg(2),console.log('code :',2)}
    }
    else{setWarningReg(1),console.log('code :',1)}
  
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
          togleMasuk={validasi}
        />
        <InputPassword
          toglePasswordValue={(e) => {setPasswordValue(e);}}
          warningReg={warningReg}
          togleMasuk={validasi}
        />
        <InputPassword
          title={"Konfirmasi Kata Sandi"}
          toglePasswordValue={(e) => {setPasswordValue2(e);}}
          warningReg={warningReg}
          togleMasuk={validasi}
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
