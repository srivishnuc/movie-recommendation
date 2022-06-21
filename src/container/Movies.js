import axios from 'axios'
import SeriesMovie from '../component/SeriesMovie'
import Error from '../component/Error'
import { useEffect, useState } from 'react'
import './Movies.scss'

import Slider from "react-slick";

import { apiKey, sliderSettings, isSeriesMovie } from '../constant'



const Movies = (props) => {
    const [movieList, setMovieList] = useState([])
    const [viewDetails, setViewDetails] = useState(0)



    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/${isSeriesMovie()}?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_original_language=${props.language}`).then(response => {
            setMovieList(response.data.results)
        }).catch(() => setMovieList([]))
    }, [props.language])
    return (
        <main>
            <h1>Lastest Movies</h1>
            <div className='list-container'>
                {movieList.length ?
                    <Slider {...sliderSettings}>
                        {movieList.map(mov => {
                            if (mov.poster_path !== null)
                                return <SeriesMovie key={mov.id} details={mov} smid={mov.id} setShowDetails={setViewDetails} display={mov.id === viewDetails ? true : false} />
                            else
                                return false
                        })}
                    </Slider > : <Error />
                }
            </div >
        </main >
    )
}

export default Movies