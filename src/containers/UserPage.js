import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../ducks/users';
import UserProfile from '../components/UserProfile';

/**
 * User page container class
 */
class UserPage extends Component {

    /**
     *
     * @param props
     */
    constructor ( props ) {
        super( props );
    }

    /**
     * Fetch data before component mount
     */
    componentWillMount () {
        const { routeParams:{ username }, getUser } = this.props;
        getUser( username );
    }

    /**
     *
     * @returns {XML}
     */
    render () {
        const { errors, user } = this.props;
        return (
            <div>
                <div>{(errors) ? <h4>{errors.toString()}</h4> :<UserProfile user={user}/>}</div>
            </div>

        )
    }
}
/**
 *
 * @param state
 * @returns {{users: *}}
 */
const mapStateToProps = ( state ) => {
    const { data, selected, errors } = state.users;
    return {
        user: (data && selected) ? data[ selected ] : null,
        errors
    };

};
/**
 *
 */
export default connect( mapStateToProps, { getUser } )( UserPage );

