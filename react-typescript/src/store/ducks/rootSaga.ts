import { all, takeLatest } from 'redux-saga/effects';

// eslint-disable-next-line import/extensions
import { RepositoriesTypes } from './repositories/types';
// eslint-disable-next-line import/extensions
import { load } from './repositories/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
}
