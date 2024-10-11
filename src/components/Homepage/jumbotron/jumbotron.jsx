import style from '../../../css/homepage.module.css'
import heroInfo from '../../../assets/images/hero-info.svg'
import volumeOff from '../../../assets/images/volume-off.png'



const Jumbotron = ()=>{
    
    return (
        <div className={style.jumbotron}>
        <section className={style.jumbotron_info}>
            <div className={style.jumbotron_info_name}>
            <h1>Duty After School</h1>
            <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
            </div>
            <div className={style.hero_button}>
                <button>Mulai</button>
                <button><img src={heroInfo} style={{width:'15px'}}/>Selengkapnya</button>
                <i>18+</i>
                <button className={style.volume_off}><img src={volumeOff}/></button>
            </div>
        </section>
    </div>
    )
}

export default Jumbotron;