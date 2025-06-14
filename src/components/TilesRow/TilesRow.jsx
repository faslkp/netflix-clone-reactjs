import React, { useEffect, useState } from 'react'
import './TilesRow.css'
import axios from "../../axios.js"
import { API_KEY } from '../../constants.js'

function TilesRow({ genre, genreId, tileSize }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`discover/movie?api_key=${API_KEY}&with_genres=${genreId}`).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    return (
        <div className='tiles-row'>
            <div className="row-wrapper">
                <h1 className='tile-head'>{genre}</h1>
                <div className="row">
                    {movies.map((movie) => (
                        <div className="tile" style={{ minWidth: tileSize, maxWidth: tileSize }}>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                            <div className="movie-details">
                                <h1 className="movie-title">{movie.title}</h1>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default TilesRow
