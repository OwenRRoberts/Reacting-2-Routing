import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const CastDetails = () => {
    const { castDeets } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${castDeets}`)
            .then(res => res.json())
            .then(cast => setCast(cast))
    }, [castDeets]);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <div class="card style=width: 18rem; mb-5">
                        <div class="card-body">
                            <h1 class="card-title text-center">{cast?.name}</h1>
                            <h3 class="card-title text-center">{cast?.gender}</h3>
                            <h5 class="card-title text-left">{cast?.age}</h5>
                            <h5 class="card-title text-center">Rotten Tomatoes Score - {cast?.casts}</h5>    
                            {/* would like to have the RT line even with the "release date" line */}
                            <p class="card-text">{cast?.description}</p>
                        </div>
                    </div>
                    <Link to="/Cast" className="btn btn-secondary">Back to cast list</Link>
                </div>
            </section>
        </main>
    )
}

export default CastDetails;