import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../ducks/users';

import UsersList from '../components/UsersList';

class UsersPage extends Component {

    componentWillMount () {
        this.props.getUsers();
    }

    render () {
        const { users } = this.props;

        return (
            <div>
                <h2 className="text-center">Users list</h2>
                <UsersList users={users}/>
                <div className="row text-center">
                    {(users.ids) ? <button onClick={this.props.getUsers} className="btn btn-default">Get more users</button> : null}
                </div>
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
