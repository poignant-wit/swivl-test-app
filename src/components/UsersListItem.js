import React from 'react';
import { Link } from 'react-router';

/**
 *
 * @param user
 * @returns {XML}
 * @constructor
 */
const UsersListItem = ( { user } ) => {

    return (
        <li className="media">
            <div className="media-left">
                <Link to={'users/' + user.login}>
                    <img alt="64x64" className="media-object" src={user.avatar_url}/>
                </Link>
            </div>
            <div className="media-body">
                <Link to={'users/' + user.login}>
                    <h4 className="media-heading">{user.login}</h4>
                </Link>
                <a href={user.html_url}><i className="fa fa-github fa-fw"/></a>
            </div>
        </li>
    );
};

export default UsersListItem;