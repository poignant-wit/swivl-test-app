import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getUsers, getUsersSuccess } from '../ducks/users.js';
import * as API from '../API';

function* getUsersWatcher() {
    try {
        const users = yield call( API.getUsers );
        console.log( users );
        yield put( getUsersSuccess( users.data ) );
    } catch ( e ) {
        console.log( e );
    }
}

function* usersSaga() {
    yield take( getUsers.type, eventsPinnedWatcher );
}

export default usersSaga;
