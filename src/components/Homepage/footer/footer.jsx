import logo from '../../../assets/images/Chill-Logo.svg'
import style from '../../../css/homepage.module.css'
import {useState} from 'react'

const Footer = ()=>{
    const [showGenre, setShowGenre] = useState(false)
    const [showHelp, setShowHelp] = useState(false)

    return (
        <footer>
        <section className={style.footer_container}>

            <section className={style.copyright}>
                <div className={style.footer_logo}>
                    <img src={logo} alt="Chill-Logo"/>
                    <h1>CHILL</h1>
                </div>
                <p>@2024 Chill By Putra Ahmad Salafi</p>
            </section>
    
            <section className={style.genre}>
                <div className={style.footer_genre_header} onClick={()=>setShowGenre(!showGenre)}>
                    <h2>Genre</h2>
                </div>
                <div className={`${style.footer_genre_body} ${showGenre?style.active:''}`}>
                    <ul>
                        <li>Aksi</li>
                        <li>Anak-anak</li>
                        <li>Anime</li>
                        <li>British</li>
                        <li>Drama</li>
                        <li>Fantasi Ilmiah</li>
                        <li>Kejahatan</li>
                        <li>KDrama</li>
                        <li>Komedi</li>
                        <li>Petualanga</li>
                        <li>Perang</li>
                        <li>Romantis</li>
                        <li>Sains & Alam</li>
                        <li>Thriller</li>
                    </ul>
                </div>
            </section>
    
            <section className={style.bantuan}>
                <div className={style.footer_genre_header} onClick={()=>{setShowHelp(!showHelp)}}>
                    <h2>Bantuan</h2>
                </div>
                <div className={`${style.footer_genre_body} ${showHelp?style.active : '' }`}>
                    <ul>
                        <li>FAQ</li>
                        <li>Kontak Kami</li>
                        <li>Privasi</li>
                        <li>Syarat & Ketentuan</li>
                    </ul>
                </div>
            </section>
        </section>
    </footer>
    )
}

export default Footer;