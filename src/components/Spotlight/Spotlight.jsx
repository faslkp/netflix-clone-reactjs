import React, { useEffect, useState } from 'react'
import "./Spotlight.css"
import axios from "../../axios.js"
import {API_KEY} from "../../constants.js"

function Spotlight({}) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`movie/now_playing?api_key=${API_KEY}`).then((response) => {
            let randomNum = parseInt(Math.random()*10)
            setMovie(response.data.results[randomNum])
        })
        
    }, [])

    return (
        <div className='spotlight' style={movie && {backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}}>
            <div className="wrapper">
                <div className="details">
                    <h1 className="title">{movie && movie.title}</h1>
                    <p className="overview">{movie && movie.overview}</p>
                    <div className="buttons">
                        <span className='btn btn-play'>
                            <i className="fa-solid fa-play"></i>
                            <a href="#" className="btn-anchor-play">Play</a>
                        </span>
                        <span className='btn btn-info'>
                            <i className="fa-solid fa-circle-info"></i>
                            <a href="#" className="btn-anchor-info">More Info</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bottom-fade"></div>
        </div>
    )
}

export default Spotlight
