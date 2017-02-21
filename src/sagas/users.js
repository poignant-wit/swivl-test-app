import { call, put, takeLatest, select, fork } from 'redux-saga/effects'
import { getUsers, getUsersSuccess, getUsersError, getUser, getUserSuccess, getUserError } from '../ducks/users.js';
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

function* getUserWatcher ( action ) {
    try {
        const user = yield call( API.getUser, action.payload );
        yield put( getUserSuccess( user.data ) );
    } catch ( e ) {
        yield put( getUserError( e ) );
    }
}

function* userSaga () {
    yield takeLatest( getUser, getUserWatcher );
}

export default function* usersRootSaga () {
    yield [
        fork( usersSaga ),
        fork( userSaga ),
    ];
};
