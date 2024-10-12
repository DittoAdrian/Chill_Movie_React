import style from '../../../css/homepage.module.css'
import scrollLeft from '../../../assets/images/scroll-left.svg'
import scrollRight from '../../../assets/images/scroll-right.svg'
import imageContoh from '../../../../public/images/image28.png'
import { useRef } from 'react'

const TopRating = (props)=>{

    const scrollRef = useRef(null);
    const scrollLeftB = () => {
        scrollRef.current && scrollRef.current.scrollBy({ left: -window.innerWidth/2, behavior: 'smooth' });};
    
      const scrollRightB = () => {
        scrollRef.current && scrollRef.current.scrollBy({ left: window.innerWidth/2, behavior: 'smooth' });};

    return(
        <section className={style.topRating}>
            <h1>{props.title}</h1>
            <div className={style.container_content_topRating}>

                <img src={scrollLeft} alt="" onClick={()=>{scrollLeftB()}}/>
                <div id="topRatingScroll" className={style.topRating_container_scroll} ref={scrollRef}>

                <div className={style.card_container_toprating}>

                   {props.data.map((item)=>{
                        return (
                                <div className={style.card_topRating} key={item.id}>
                                    {item.update && <p>Episode Baru</p>}
                                    <img src={item.image}/>
                                </div>
                        )
                   })}

                </div>
 
                </div>
                <img src={scrollRight} alt="" onClick={()=>{scrollRightB()}}/>

            </div>

        </section>
    )
}

export default TopRating;