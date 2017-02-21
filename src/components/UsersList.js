import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

/**
 *
 */
class UsersList extends Component {

    /**
     *
     * @returns {XML}
     */
    render () {
        const { data, ids } = this.props.users;
        const placeHolder = <h4 className="text-center">...Loading...</h4>;

        return (
            <ul className="list-unstyled">
                {(ids) ? ids.map( id => <UsersListItem key={id} user={data[ id ]}/> ) : placeHolder}
            </ul>
        )
    }
}
export default UsersList;