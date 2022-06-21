const SeriesMovieDetails = (props) => {
    return (
        <>
            <label className="content-detail">Title:&nbsp;<span>{props.detail.original_title}</span></label>
            <label className="content-detail">Overview:&nbsp;</label><div className="overview-content"><label>{props.detail.overview}</label></div>
            <label className="content-detail">Popularity:&nbsp;<span>{props.detail.popularity}</span></label>
        </>
    )
}

export default SeriesMovieDetails