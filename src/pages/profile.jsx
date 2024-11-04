import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import style from '../css/profile.module.css'
import profileLarge from '../assets/images/profileLarge.png'
import editIcon from '../assets/images/EditIcon.svg'
import visibilityOff from '../assets/images/visibility_off.svg'
import visibilityOn from '../assets/images/visibility_on.svg'
import warningIcon from '../assets/images/warning.png'
import Footer from '../components/Homepage/footer/footer';
import TopRating from '../components/Homepage/list-film/top-rating'
import useData from '../store/Data'

const Profile = ()=>{
    const {userLogin,moviesData,usersData,updateUserById} = useData();
    const [userData,setUserData] = useState({username : '-',email:'-',password:'-'});
    const [hidePass,setHidePass] = useState(false)
    const daftarSaya = moviesData.filter((item)=>{return item.trending && !item.watched}).reverse()
 
    useEffect(()=>{
        async function fetchUser() {
            if (userLogin) {
                try{
                    const res = await axios.get(`https://672643ab302d03037e6cf4b5.mockapi.io/users/${userLogin}`);
                    const data = await res.data
                    setUserData(data)
                }
                catch(err){
                    console.log('Error',err)
                }
            }
        }
        fetchUser();
    },[])
 
    const toggleUsername = (e)=>{
        const {username,email,password} = userData
        const inputValue = e.target.value;
        setUserData({username:inputValue,email,password})
    }
    const toggleEmail = (e)=>{
        const {username,email,password} = userData
        const inputValue = e.target.value;
        setUserData({username,email:inputValue,password})
    }
    const togglePassword = (e)=>{
        const {username,email,password} = userData
        const inputValue = e.target.value;
        setUserData({username,email,password:inputValue})
    }

    const submitData = async (e)=>{
        e.preventDefault();
        try{
        axios.put(`https://672643ab302d03037e6cf4b5.mockapi.io/users/${userLogin}`,userData)
        }
        catch(err){
            console.log('gagal Update data')
        }
        alert('Data telah terUpdate!')
    }

    return (
        <div className={style.containerBox}>
            <div className={style.profileContainer}>
            {userLogin ? 
            <>
                <div className={style.editContainer}>
                    <h1>Profil Saya</h1>
                    <div className={style.profileImage}>
                        <img src={profileLarge} alt="" />
                        <div>
                            <button>Ubah Foto</button>
                            <p><img/> Maksimal 2MB</p>
                        </div>
                    </div>
                    <form className={style.formEdit} onSubmit={submitData}>
                        <div className={style.inputContainer}>
                            <label htmlFor="username">Nama Penguna</label>
                            <input 
                                type="text" 
                                name='username' 
                                value={userData.username}
                                onChange={(e)=>{toggleUsername(e)}}/>
                            <img src={editIcon} alt="" />
                        </div>
                        <div className={style.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name='email' 
                                value={userData.email}
                                onChange={(e)=>{toggleEmail(e)}}/>
                            <img src={editIcon} alt="" />
                        </div>
                        <div className={style.inputContainer}> 
                            <label htmlFor="password">Kata Sandi</label>
                            <input 
                                type={hidePass ? "text" : 'password'
                                } 
                                name='password' 
                                value={userData.password}
                                onChange={(e)=>{togglePassword(e)}}/>
                            <img src={hidePass ? visibilityOn : visibilityOff} onClick={()=>{setHidePass(!hidePass)}} />
                        </div>
                        <button type='submit' onSubmit={(e)=>{submitData(e)}}>Simpan</button>
                    </form>
                </div>
                <div className={style.cardBerlangganan}>
                    <img src={warningIcon} alt="" />
                    <div>
                        <h3>Saat ini anda belum berlangganan</h3>
                        <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                        <button>Mulai Berlangganan</button>
                    </div>
                </div>
            </>:
            
            //    Login
            <div className={style.loginContainer}>
                <h2>Anda Belum Login</h2>
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </div>}
            </div>
            {userLogin && 
                <TopRating 
                    title='Daftar Saya'
                    data={daftarSaya}/>}
            <Footer/> 
        </div>
    )
}

export default Profile;