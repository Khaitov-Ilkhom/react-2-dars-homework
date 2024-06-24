import "./Movie.css"
import {taskTwo} from "../api/tasks";

function Movie () {
    return (
        <div className='container'>
            <div className='cards'>
                {
                    taskTwo.map(movie =>
                        <div className="card">
                            <div className="poster"><img src={movie.img} alt="Location Unknown"/></div>
                            <div className="details">
                                <h1>{movie.name}</h1>
                                <h2>{movie.year} • {movie.duration} min</h2>
                                <div className="rating">
                                    <span>{movie.imdb}/10 </span>
                                    <span><b> +{movie.age}</b></span>
                                </div>
                                <div className="tags">
                                    <span className="tag">{movie.country}</span>
                                </div>
                                <p className="desc">{movie.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Movie