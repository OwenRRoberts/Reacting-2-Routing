import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const FilmDetails = () => {
    const { filmID } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmID}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [filmID]);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <div class="card style=width: 18rem; mb-5">
                        <div class="card-body">
                            <h1 class="card-title text-center">{film?.title}</h1>
                            <h3 class="card-title text-center">{film?.director}</h3>
                            <h5 class="card-title text-left">{film?.release_date}</h5>
                            <h5 class="card-title text-right">Rotten Tomatoes Score - {film?.rt_score}</h5>    
                            <p class="card-text">{film?.description}</p>
                        </div>
                    </div>
                    <Link to="/Films" className="btn btn-secondary">Back to film list</Link>
                </div>
            </section>
        </main>
    )
}

export default FilmDetails;