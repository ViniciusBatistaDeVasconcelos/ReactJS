import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/extensions
import api from '../../../services/api';

// eslint-disable-next-line import/extensions
import { loadSuccess, loadFailure } from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* load() {
  try {
    const response = yield call(api.get, 'users/diego3g/repos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
