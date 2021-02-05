import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/configureStore'

import Main from './pages/Main';
import Profile from './pages/Profile';

const routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </ConnectedRouter>
);

export default routes;