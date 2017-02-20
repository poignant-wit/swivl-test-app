import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../ducks/users';

class UsersPage extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>USERS</div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        users: state.users
    };
};

export default connect( mapStateToProps, { getUsers } )( UsersPage );
