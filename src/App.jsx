import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutFilms from './pages/AboutFilms';
import AboutPeople from './pages/AboutPeople';
import Films from './pages/Films';
import Home from './pages/Home';
import People from './pages/People';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/films" component={Films} />
                <Route exact path="/films/:id" component={AboutFilms} />
                <Route exact path="/people" component={People} />
                <Route exact path="/people/:id" component={AboutPeople} />
            </Switch>
        </Router>
    );
}

export default App;

// BrowserRouter can be renamed anything
// think of Switch like a switch board
// Route is self closing
// Route always has two props attached to it, path and component
// path reads the url bar
// you tell component which component you want to show up on the path
// Route paths need to have the word exact or they will only route in alphbetical order
// Link replaces any anchor or button element that has to lead you to a different page
// Link needs to have a prop called 'to' that needs to a string of some kind
// you can render NavBar above Switch. Switch acts like the body of the page
// NavBar won't re render because it is above the Switch
// films/:id means we can take the id of the films and put it in the AboutFilms page