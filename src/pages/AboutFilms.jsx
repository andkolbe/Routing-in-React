import React from 'react'
import { Link } from 'react-router-dom';

class AboutFilms extends React.Component {

    state = {
        film: {} // we only want one object in the array so we use {} instead of []
    }

    async componentDidMount() {
        let res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`); //fetch the id so we can pull out all of the properties 
        let film = await res.json();
        this.setState({ film });
    }

    render() {
        return (
            <>
                <main className="container">
                    <section className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-sm mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.film.title}</h5>
                                    <p className="card-text">{this.state.film.description}</p>
                                    <p className="card-text">Director: {this.state.film.director}</p>
                                    <p className="card-text">Producer: {this.state.film.producer}</p>
                                    <p className="card-text">Release Date: {this.state.film.release_date}</p>
                                    <Link className="btn btn-link" to="/films">Go back</Link>
                                </div>
                            </div>  
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default AboutFilms;

// everything inside of a return must be contained in one element

