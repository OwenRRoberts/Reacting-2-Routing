import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
    }, []);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-md-6 offset-md-3">
                    <div class="card style=width: 18rem; mb-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">List of Studio Ghibli films</h5>
                            <p class="card-text">Here's a comprehensive list of all the films that Studio Ghibli has done up to this point!  Feel free to click the link next to each film to learn more about it!</p>
                        </div>
                    </div>
                    {/* <div className="text-center">Film Page</div> */}
                    <ul className="list-group">
                        {films.map(film => (
                            <li key={`film-item-${film.title}`} className='list-group-item d-flex justify-content-between align-items-center'>
                                {film.title}
                                {/* {film.description} */}
                                <Link to={`/Films/${film.id}`} className="btn btn-primary btn-sm">Click for Details</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Films;