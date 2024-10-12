import style from '../../../css/homepage.module.css'
import {useState} from 'react'
import imageContoh from '../../../../public/images/lanjutTonton0.png'
import ratingLogo from '../../../assets/images/star-rating.svg'

const FilmLanjutTonton = (props)=>{
    
    const [onHover,setOnHover] = useState(false)

    return (
    <div className={style.card_lanjutTonton} onMouseEnter={()=>{setOnHover(true)}} onMouseLeave={()=>{setOnHover(false)}}>
        <img src={props.image} className={`${style.card_lanjutTonton_img} ${onHover ? style.active : '' }`}/>
        
        <div className={`${style.card_lanjutTonton_preview} ${onHover ? style.active:''}`}>
            <p className={style.lanjutTonton_nama}>{props.name}</p>
            <p className={style.lanjutTonton_rating}>
            <img src={ratingLogo} alt="star"/>
            {props.rating}/5
            </p>
        </div>
    </div>
    )
}

export default FilmLanjutTonton