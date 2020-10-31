import React from 'react'
import { Link } from 'react-router-dom';

class AboutPeople extends React.Component {

    state = {
        person: {} // we only want one object in the array so we use {} instead of []
    }

    async componentDidMount() {
        let res = await fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`); //fetch the id so we can pull out all of the properties 
        let person = await res.json();
        this.setState({ person });
    }

    render() {
        return (
            <>
                <main className="container">
                    <section className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-sm mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.person.name}</h5>
                                    <p className="card-text">{this.state.person.gender}</p>
                                    <p className="card-text">Age: {this.state.person.age}</p>
                                    <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
                                    <p className="card-text">Hair Color: {this.state.person.hair_color}</p>
                                    <Link className="btn btn-link" to="/people">Go back</Link>
                                </div>
                            </div>  
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default AboutPeople;

// everything inside of a return must be contained in one element