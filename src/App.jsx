import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './views/Home';
import Films from './views/Films'
import FilmDetails from './views/FilmDetails'
import Cast from './views/Cast'


const App = () => {
    return (
        <BrowserRouter>
            <div class='jumbotron'>
                <h1 className='text-center'>Welcome to the Studio Ghibli Movie Database!</h1>
                <div className='d-flex justify-content-center'>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link className="btn btn-info mr-4 mt-2" to="/">Go Home</Link>
                    <Link className="btn btn-info mr-4 mt-2" to="/films">View Films</Link>
                    <Link className="btn btn-info mr-4 mt-2" to="/cast">View Cast</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:filmID">
                    <FilmDetails />
                </Route>
                <Route exact path="/cast">
                    <Cast />
                </Route>
                <Route exact path="*">
                    {() => <h1>404, page not found, you did something wrong, ya Dummy</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;