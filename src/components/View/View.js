import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Container } from '@material-ui/core';

import Header from '../Header/Header';
import Home from '../Home/Home';
import PageNotFound from '../PageNotFound/PageNotFound';
import ShowPost from '../ShowPost/ShowPost';

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

                        <Route path="/post/:postId">
                            <ShowPost />
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