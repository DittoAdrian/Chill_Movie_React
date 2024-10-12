import useData from '../../../store/Data'
import style from '../../../css/homepage.module.css'
import scrollLeft from '../../../assets/images/scroll-left.svg'
import scrollRight from '../../../assets/images/scroll-right.svg'
import FilmLanjutTonton from './film-lanjut-tonton.jsx'
import React, { useRef } from 'react';


 const LanjutTonton = ()=>{
    const {moviesData} = useData()

    const scrollRef = useRef(null);

    const scrollLeftB = () => {
        scrollRef.current && scrollRef.current.scrollBy({ left: -window.innerWidth/2, behavior: 'smooth' });};
    
      const scrollRightB = () => {
        scrollRef.current && scrollRef.current.scrollBy({ left: window.innerWidth/2, behavior: 'smooth' });};

    return (
        <section className={style.lanjutTonton}>
            <h1>Melanjutkan Tonton Film</h1>

             <div className={style.container_content_lanjut}>
                <img id="lanjut-scroll-kiri" src={scrollLeft} alt="" onClick={()=>scrollLeftB()}/>
                <div className={style.lanjut_container_scroll} ref={scrollRef}>
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
                <img id="lanjut-scroll-kanan" src={scrollRight} alt="" onClick={()=>scrollRightB()}/>
             </div>
            
        </section>
    )
     }
 export default LanjutTonton;