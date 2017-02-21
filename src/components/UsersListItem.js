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
        <div className="media">
            <div className="media-left">
                <Link to={'users/' + user.id}>
                    <img alt="64x64" className="media-object" src={user.avatar_url}/>
                </Link>
            </div>
            <div className="media-body">
                <Link to={'users/' + user.id}>
                    <h4 className="media-heading">{user.login}</h4>
                </Link>
                <a href={user.html_url}><i className="fa fa-github fa-fw"/></a>
            </div>
        </div>
    );
};

export default UsersListItem;