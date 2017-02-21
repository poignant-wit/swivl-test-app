import React from 'react';

/**
 *
 * @param user
 * @returns {XML}
 * @constructor
 */
const UserProfile = ( { user } ) => {

    if(!user) {
        return <h4 className="text-center">...Loading data...</h4>;
    }

    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="media">
                    <div className="media-left">
                        <img alt="100x100" className="media-object-big" src={user.avatar_url}/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{user.name}</h4>
                        <h5>Email: {user.email}</h5>
                        <h5>Location: <b>{user.location}</b></h5>
                        <h5>Blog: <b>{user.blog}</b></h5>
                        <h5>Bio: <b>{user.bio}</b></h5>
                        <h5>Followers: <b>{user.followers}</b></h5>
                        <h5>Following: <b>{user.following}</b></h5>
                        <h5>Created at: <b>{user.created_at}</b></h5>
                    </div>
                </div>
            </div>
        </div>

    );
};
/**
 *
 */
export default UserProfile;