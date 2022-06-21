import React from 'react'
import './component.scss'
import { imgUrl } from '../constant'
import SeriesMovieDetails from './SeriesMovieDetails';

const SeriesMovie = (props) => {

    const id = "sm" + props.smid
    const style = props.display ? { 'zIndex': 3 } : {}

    function handleShow(e) {
        props.setShowDetails(parseInt(e.target.id.slice(2)));
    }

    // function handleShow() {
    //     document.querySelectorAll(`article:not(#mov${props.movid})`).forEach((i) => i.classList.add('is-hidden'))
    //     document.getElementById(movId).classList.toggle("is-hidden")
    // }

    return (
        <>
            <div className='contentCard'>
                <img id={id} src={imgUrl + props.details.poster_path} onClick={handleShow} alt="series-movie-poster" width="225rem" height="300rem" />
                {props.display &&
                    <article className='content' >
                        <SeriesMovieDetails detail={props.details} />
                    </article>}
            </div >


        </>
    )
}

export default SeriesMovie