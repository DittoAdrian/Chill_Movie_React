import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUserById, fetchPutUser, fetchDeleteUser } from "../services/api";// Fetch api for MockApi
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/redux/slices/slice";
import style from "../css/profile.module.css";
import profileLarge from "../assets/images/profileLarge.png"; //ASSET IMAGE
import editIcon from "../assets/images/EditIcon.svg";
import visibilityOff from "../assets/images/visibility_off.svg";
import visibilityOn from "../assets/images/visibility_on.svg";
import warningIcon from "../assets/images/warning.png";
import Footer from "../components/Homepage/footer/footer";
import TopRating from "../components/Homepage/list-film/top-rating";
import useData from "../store/Data"; //Zustand sudah tidak dipakai



const Profile = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state)=>state.login.id);
  const {moviesData} = useData(); //Zustand sudah tidak dipakai
  const [hidePass, setHidePass] = useState(false);
  const [userData, setUserData] = useState({
    username: "-",
    email: "-",
    password: "-",
  });
  const daftarSaya = moviesData.filter((item) => { //untuk list daftar film
      return item.trending && !item.watched}).reverse();

  // Mengambil data User
  useEffect(() => {
    async function fetchUser() {
      if (userLogin) {
        try {
          const data = await fetchUserById(userLogin)
          setUserData(data);
        } catch (err) {
          console.log("Error", err);
        }
      }
    }
    fetchUser();
  }, []);

  // Toogle untuk simpan perubahan data akun pada state
  const toogleUpdate = (data)=>{
    setUserData({...userData,...data})
  }

  // Submit Update data
  const submitData = async (e) => {
    e.preventDefault();
    try {
      await fetchPutUser(userLogin,userData);
      alert("Data telah terupdate!");
    } catch (err) {
      console.log("Gagal Update Data", err);
    }
  };

  // Delete Account
  const deleteAcount = async ()=>{
    const konfirmasi = window.confirm('Apakah Anda yakin ingin menghapus data?');
    if (konfirmasi){
      try{
        await fetchDeleteUser(userLogin);
        alert("Akun telah dihapus!")
        dispatch(updateUser({id: null}));
      }
      catch(err){
        console.log("Akun gagal dihapus")
      }
    }
    else {
      alert("Penghapusan akun dibatalkan")
    }
  }

  return (
    // Container
    <div className={style.containerBox}>
      <div className={style.profileContainer}>
        {userLogin ? ( // jika User belum melakukan login, User akan di arahkan ke login page
          <>
            {/* User photo & Change photo */}
            <div className={style.editContainer}>
              <h1>Profil Saya</h1>
              <div className={style.profileImage}>
                <img src={profileLarge} alt="" />
                <div>
                  <button>Ubah Foto</button>
                  <p>
                    <img /> Maksimal 2MB
                  </p>
                </div>
              </div>

              {/* form data user dan edit button */}
              <form className={style.formEdit} onSubmit={submitData}>
                <div className={style.inputContainer}>
                  <label htmlFor="username">Nama Penguna</label>
                  <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={(e) => {
                      toogleUpdate({username: e.target.value})
                    }}
                  />
                  <img src={editIcon} alt="" />
                </div>
                <div className={style.inputContainer}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={(e) => {
                      toogleUpdate({email: e.target.value});
                    }}
                  />
                  <img src={editIcon} alt="" />
                </div>
                <div className={style.inputContainer}>
                  <label htmlFor="password">Kata Sandi</label>
                  <input
                    type={hidePass ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChange={(e) => {
                      toogleUpdate({password: e.target.value});
                    }}
                  />
                  <img
                    src={hidePass ? visibilityOn : visibilityOff}
                    onClick={() => {
                      setHidePass(!hidePass);
                    }}
                  />
                </div>
                <div className={style.formEditButton}>
                  <button
                    type="submit"
                    onSubmit={(e) => {
                    submitData(e);
                  }}
                  >
                    Simpan
                  </button>
                  <button 
                    type="button"
                    onClick={()=>{deleteAcount()}}>
                    Hapus Akun
                  </button>
                </div>
              </form>
            </div>

            {/* card berlanganan */}
            <div className={style.cardBerlangganan}>
              <img src={warningIcon} alt="" />
              <div>
                <h3>Saat ini anda belum berlangganan</h3>
                <p>
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                  Kamu!
                </p>
                <button>Mulai Berlangganan</button>
              </div>
            </div>
          </>
        ) : (
          //    Login
          <div className={style.loginContainer}>
            <h2>Anda Belum Login</h2>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}
      </div>

      {/* Daftar Saya */}
      {userLogin && <TopRating title="Daftar Saya" data={daftarSaya} />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
