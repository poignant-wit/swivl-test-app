import React, { Component } from 'react';
import Navbar from '../components/Navbar';

/**
 *
 */
class AppPage extends Component {
    render () {
        return (
            <div className="container">
                <Navbar/>
                {this.props.children}
                </div>
        )
    }
}
/**
 *
 */
export default AppPage;
