import React from 'react';
import Header from '../Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../Home/Home';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Container } from '@material-ui/core';

const View = () => {
    return (
        <>
            <Header />
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>

                        <Route path="*">
                            <PageNotFound />
                        </Route>

                    </Switch>
                </Router>
            </Container>
        </>
    );
};

export default View;