import axios from 'axios'
import SeriesMovie from '../component/SeriesMovie'

import { useEffect, useState } from 'react'
import './Movies.scss'

import Slider from "react-slick";







import { apiKey, sliderSettings, isSeriesMovie } from '../constant'



const Series = (props) => {
    const [showList, setShowList] = useState([])
    const [viewDetails, setViewDetails] = useState(0)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/${isSeriesMovie()}?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_original_language=${props.language}`).then(response => {
            setShowList(response.data.results)
        })
    }, [props.language])
    return (
        <main>
            <h1>Lastest Series</h1>
            <div className='list-container'>
                <Slider {...sliderSettings}>
                    {showList.map(show => {
                        if (show.poster_path !== null)
                            return <SeriesMovie key={show.id} details={show} smid={show.id} setShowDetails={setViewDetails} display={show.id === viewDetails ? true : false} />
                        else
                            return false
                    })}
                </Slider>
            </div>
        </main>
    )
}
export default Series