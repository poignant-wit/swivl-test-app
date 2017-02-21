import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './ducks'

/**
 *
 * @param initialState
 * @returns {Store}
 */
export default function configureStore ( initialState ) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        compose( applyMiddleware( sagaMiddleware ) )
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch( END );
    return store
}
