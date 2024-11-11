import { Link,useNavigate } from "react-router-dom";
import { useState} from "react";
import style from "../../css/login.module.css";
import ChillLogo from "./logo";
import InputUername from "./Username";
import InputPassword from "./Password";
import ButtonDaftar from "./ButtonDaftar";
import { fetchUsers, fetchPostUser  } from "../../services/api";

const RegisterBox = () => {
  const [usernameValue, setUsernameValue] = useState(""); // Menyimpan value Input
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValue2, setPasswordValue2] = useState("");
  const [warningReg,setWarningReg] = useState(0); // state notifikasi warning
  const navigate = useNavigate()


  // Validasi data inputan dengan data pada MockApi, lalu melakukan post pada data
  const validasi = async () => {
    if (usernameValue){                                                                     //jika usernameValue tidak ada akan menampilkan kode: 1 "masukan username"
      try{                                                                                  //try antisipasi error dari async/await
        const fetchDataUsers = await fetchUsers()                                           //melakukan fetch semua data user pada mockapi
        const foundUser = await fetchDataUsers.find((user) => user.username === usernameValue)  //mencari data username memastikan tidak ada yang sama
        if(!foundUser){                                                                     //jika foundUser bernilai true akan menampilkan kode: 2 "username sudah digunakan"
          if (passwordValue) {                                                              //jika kolom password tidak diisi akan mnampilkan kode: 3 "kolom password perlu diisi"
            if(passwordValue === passwordValue2){                                           // jika kedua kolom password berbeda akan menampilkan kode: 4 "password tidak sama"

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
              catch(error){
                alert("Akun gagal Dibuat", error)
              }

            }
            else{setWarningReg(4),console.log('code :',4)}
          }
          else{setWarningReg(3),console.log('code :',3)}
        }
        else{setWarningReg(2),console.log('code :',2)}
        }
      catch(error){
        console.log("Gagal melakukan Registrasi akun")
      }
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
