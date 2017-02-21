import { createAction, handleActions } from 'redux-actions';
import R from 'ramda';
import { arrayToObjectByProp } from '../utils/array';

export const getUsers = createAction( 'users/USERS_GET' );
export const getUsersSuccess = createAction( 'users/USERS_GET_SUCCESS', ( data, since ) => ( { data, since } ) );
export const getUsersError = createAction( 'users/USERS_GET_ERROR' );
export const getUser = createAction( 'users/USER_GET' );

const initialState = {
    isFetching: false,
    // data:       {},
    // ids:        []
};

export default handleActions( {
    [ getUsers ]:        ( state, action ) => {
        return { ...state, isFetching: true };
    },
    [ getUsersSuccess ]: ( state, action ) => {
        const _ids = (state.ids) ? state.ids : [];

        return {
            ...state,
            isFetching: false,
            data:       R.merge( state.data, arrayToObjectByProp( 'id' )( action.payload.data ) ),
            ids:        R.concat( _ids, R.pluck( 'id', action.payload.data ) ),
            since:      action.payload.since
        };
    }
}, initialState );
