import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import {BallotHeader} from "./components/BallotHeader";
import {Main} from './components/Main';
import {RegistrationForm} from './components/RegistrationForm';
import {RegisteredVoter} from "./components/RegisteredVoters";

function App() {
    return (
        <Router>
            <BallotHeader headerText="Ballot Badgers"/>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Main/>
                    </Route>
                    <Route path='/registration-form'>
                        <RegistrationForm/>
                    </Route>
                    <Route path='/registered-voters'>
                        <RegisteredVoter />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
