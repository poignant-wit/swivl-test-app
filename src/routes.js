import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppPage from './containers/AppPage';
import HomePage from './containers/HomePage';
import UsersPage from './containers/UsersPage';
import UserPage from './containers/UserPage';

export default (
    <Route path="/" component={AppPage}>
        <IndexRoute component={HomePage}/>
        <Route path="users" component={UsersPage}/>
        <Route path="users/:id" component={UserPage}/>
    </Route>
)
