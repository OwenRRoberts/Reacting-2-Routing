import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';



const Cast = () => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(cast => setCast(cast))
    }, []);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-md-6 offset-md-3">
                    <div className="text-center">Cast Page</div>
                    <ul className="list-group">
                        {cast.map(cast => (
                            <li key={`cast-item-${cast.name}`} className='list-group-item d-flex justify-content-between align-items-center'>
                                {cast.name}
                                
                                {/* {film.description} */}
                                {/* <Link to={`/Films/${film.id}`} className="btn btn-primary btn-sm">Click for Details</Link> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Cast;