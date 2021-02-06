import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/extensions
import { RepositoriesState } from './ducks/repositories/types';

// eslint-disable-next-line import/extensions
import rootReducer from './ducks/rootReducer';
// eslint-disable-next-line import/extensions
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
