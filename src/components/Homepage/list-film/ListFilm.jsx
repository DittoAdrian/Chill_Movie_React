import { useEffect, useState } from 'react';
import style from '../../../css/homepage.module.css'
import LanjutTonton from './lanjut-tonton';
import TopRating from './top-rating'
import useData from '../../../store/Data.js'

const ListFilm = ()=>{

    const {moviesData} = useData();
    const TopMoviesData = moviesData.filter((item)=>{return item.rating >= 4.6 && !item.watched})
    const TrandingMoviesData = moviesData.filter((item)=>{return item.trending && !item.watched})
    const NewMoviesData = moviesData.filter((item)=>{return item.tahun >= 2022 && !item.watched}).reverse()

    const [moviesDataFetch, setMoviesDataFetch] = useState([])
    useEffect(()=>{
        async function fetchMovies() {
            const res = await fetch(
                'https://672643ab302d03037e6cf4b5.mockapi.io/movies'
            );
            const data = await res.json();
            setMoviesDataFetch(data);
        }

        fetchMovies();
    },[])

    const TopMoviesData2 = moviesDataFetch?.filter((item)=>{return item.rating >= 4.6 && !item.watched})
    const TrandingMoviesData2 = moviesDataFetch?.filter((item)=>{return item.trending && !item.watched})
    const NewMoviesData2 = moviesDataFetch?.filter((item)=>{return item.tahun >= 2022 && !item.watched}).reverse()

    return (
        <div className={style.listFilm}>
            <LanjutTonton/>
            <TopRating 
            title='Top Rating Film dan Series Hari ini'
            data={TopMoviesData2}/>
            <TopRating 
            title='Film Trending'
            data={TrandingMoviesData2}
            topTen={true}/>
            <TopRating 
            title='Rilis Baru'
            data={NewMoviesData2}/>
        </div>
    )
}

export default ListFilm;