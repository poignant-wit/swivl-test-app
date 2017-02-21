import { combineReducers } from 'redux';
import usersReducer from './users';

/**
 *
 * @type {Function}
 */
const rootReducer = combineReducers( {
    users: usersReducer
} );

/**
 *
 */
export default rootReducer;
