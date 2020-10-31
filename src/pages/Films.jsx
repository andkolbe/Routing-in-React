import React from 'react'
import { Link } from 'react-router-dom'

class Films extends React.Component {

    state = {
        films: []
    }

    async componentDidMount() {
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let films = await res.json();
        this.setState({ films });
    }

    render() {
        return (
            <>
                <main className="container">
                    <section className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">Films</h1>
                            {this.state.films.map(film => {
                                return (
                                    <div key={film.id} className="card shadow-sm mb-2">
                                        <div className="card-body">
                                            <h5 className="card-title">{film.title}</h5>
                                            <Link to={`/films/${film.id}`} className="btn btn-link">Get More Info</Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Films;

// everything inside of a return must be contained in one element

// How to get an album by its single details
// get the id and attach that to the end of the /films/ link