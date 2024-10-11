import useData from '../../../store/Data'
import style from '../../../css/homepage.module.css'
import scrollLeft from '../../../assets/images/scroll-left.svg'
import scrollRight from '../../../assets/images/scroll-right.svg'
import imageContoh from '../../../../public/images/lanjutTonton0.png'
import FilmLanjutTonton from './film-lanjut-tonton.jsx'

 const LanjutTonton = ()=>{
    const {moviesData} = useData()
    
    return (
        <section className={style.lanjutTonton}>
             <div className={style.container_content_lanjut}>
                <img id="lanjut-scroll-kiri" src={scrollLeft} alt=""/>
                <div className={style.lanjut_container_scroll} id="lanjut-container-scroll">
                    <div className={style.card_container_lanjutTonton}>
                        {moviesData.map((item)=>{
                            if (item.watched){
                            return <FilmLanjutTonton
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    rating={item.rating}
                                    image={item.image}/>}
                        })}
                    </div>
                </div>           
                <img id="lanjut-scroll-kanan" src={scrollRight} alt=""/>
             </div>
            
        </section>
    )
     }
 export default LanjutTonton;