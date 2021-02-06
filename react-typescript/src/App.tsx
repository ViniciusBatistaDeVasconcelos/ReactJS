/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React from 'react';

import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList';

import store from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => <Provider store={store}><RepositoryList /></Provider>;

export default App;
