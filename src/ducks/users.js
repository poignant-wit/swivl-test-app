import { createAction, handleActions } from 'redux-actions';

export const getUsers = createAction( 'users/USERS_GET' );
export const getUsersSuccess = createAction( 'users/USERS_GET_SUCCESS' );
export const getUser = createAction( 'users/USER_GET' );

const initialState = {
    isFetching: false,
    data: {},
    ids: []
};

export default handleActions( {
    [ getUsers ]: ( state, action ) => {
        return { ...state, isFetching: true };
    },
    [ getUsersSuccess ]: ( state, action ) => {
        return { ...state,
            isFetching: false,
            data: action.payload
        };
    },

}, initialState );
