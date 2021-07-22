import React from 'react';
import { Redirect,
         Route,
         Switch,
         BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';
import { Pokes } from '../pages/Pokes';

export const AppRouter = () => {


    return (

        <Router>

            <div>

                <Navbar />
                <Switch>

                    <Route exact path="/pokes" component={ Pokes } />
                    <Route exact path="/" component={ Home } />

                    <Redirect to="/" />

                </Switch>

            </div>

        </Router>

    )
}
