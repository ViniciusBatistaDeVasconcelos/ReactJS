import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/Error', state: { from: props.location } }} />
            )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Tela Inicial</h1>} />
            <Route exact path="/Error" component={() => <h1>Ops! Você NÃO está logado...</h1>} />
            <PrivateRoute exact path="/App" component={() => <h1>Você está logado...</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;