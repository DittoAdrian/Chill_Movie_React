import style from '../../../css/homepage.module.css'
import LanjutTonton from './lanjut-tonton';
import TopRating from './top-rating'
import useData from '../../../store/Data.js'

const ListFilm = ()=>{

    const {moviesData} = useData();
    const TopMoviesData = moviesData.filter((item)=>{return item.rating >= 4.6 && !item.watched})
    const TrandingMoviesData = moviesData.filter((item)=>{return item.trending && !item.watched})
    const NewMoviesData = moviesData.filter((item)=>{return item.tahun >= 2022 && !item.watched}).reverse()

    return (
        <div className={style.listFilm}>
            <LanjutTonton/>
            <TopRating 
            title='Top Rating Film dan Series Hari ini'
            data={TopMoviesData}/>
            <TopRating 
            title='Film Trending'
            data={TrandingMoviesData}
            topTen={true}/>
            <TopRating 
            title='Rilis Baru'
            data={NewMoviesData}/>
        </div>
    )
}

export default ListFilm;