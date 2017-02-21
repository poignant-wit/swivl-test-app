import React, { Component } from 'react';

class AppPage extends Component {
    render() {
        return (
            <div className="container">{this.props.children}</div>
        )
    }
}
export default AppPage;
