import { call, put, takeLatest, select } from 'redux-saga/effects'
import { getUsers, getUsersSuccess, getUsersError } from '../ducks/users.js';
import * as API from '../API';
import { getSinceFromLinkHeader } from '../utils/string';
/**
 *
 */
function* getUsersWatcher () {
    try {
        const state = yield select();
        const users = yield call( API.getUsers, {
            params: { since: state.users.since }
        } );
        yield put( getUsersSuccess( users.data, getSinceFromLinkHeader( users.headers.link ) ) );
    } catch ( e ) {
        yield put( getUsersError() );
    }
}
/**
 *
 */
function* usersSaga () {
    yield takeLatest( getUsers, getUsersWatcher );
}

export default usersSaga;
