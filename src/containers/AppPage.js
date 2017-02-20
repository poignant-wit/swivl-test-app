import React, { Component } from 'react';

class AppPage extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
export default AppPage;
