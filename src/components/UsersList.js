import React, { Component } from 'react';
import UsersListItem from './UsersListItem';
import InfiniteScroll from 'react-infinite-scroller';

class UsersList extends Component {

    loadItems () {
        this.props.onLoadItems()
    }

    render () {
        let items = [];
        const { data, ids } = this.props.users;
        const loader = <h4 className="text-center">Loading...</h4>;
        if ( ids ) {
            items = ids.map( id => <UsersListItem key={id} user={data[ id ]}/> );
        }

        return (

            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind( this )}
                hasMore={false}
                loader={loader}>
                <div className="tracks">
                    {items}
                </div>
            </InfiniteScroll>
        )
    }
}
export default UsersList;