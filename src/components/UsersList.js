import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

class UsersList extends Component {
    render () {
        const { data, ids } = this.props.users;
        return (
            <div>
                {(ids) ? ids.map( id => <UsersListItem key={id} user={data[ id ]}/> ) : <h4 className="text-center">Loading...</h4>}
            </div>

        )
    }
}
export default UsersList;