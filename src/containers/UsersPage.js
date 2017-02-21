import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../ducks/users';

import UsersList from '../components/UsersList';

class UsersPage extends Component {

    componentWillMount () {
        this.props.getUsers();
    }

    render () {
        return (
            <div>
                <h2 className="text-center">Users list</h2>
                <UsersList users={this.props.users}/>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        users: state.users
    };
};

export default connect( mapStateToProps, { getUsers } )( UsersPage );
