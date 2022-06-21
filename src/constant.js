export const languages = [{ name: 'Hollywood', language: 'en' }, { name: 'Kollywood', language: 'ta' }]

export const apiKey = '767b6db67cf7c47750fd6b8c4aede23c'


export const imgUrl = 'https://image.tmdb.org/t/p/original'

export function isSeriesMovie() {
    if (window.location.pathname === '/movies')
        return 'movie'
    else
        return 'tv'
}


export const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};