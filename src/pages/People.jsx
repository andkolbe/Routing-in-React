import React from 'react'
import { Link } from 'react-router-dom'

class People extends React.Component {

    state = {
        people: []
    }

    async componentDidMount() {
        let res = await fetch('https://ghibliapi.herokuapp.com/people/');
        let people = await res.json();
        this.setState({ people });
    }

    render() {
        return (
            <>
                <main className="container">
                    <section className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">People</h1>
                            {
                                this.state.people.map(person => {
                                    return (
                                        <div className="card shadow-sm mb-2">
                                            <div className="card-body">
                                                <h5 className="card-title">{person.name}</h5>
                                                <Link to={`/people/${person.id}`} className="btn btn-link">Get More Info</Link>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default People;

