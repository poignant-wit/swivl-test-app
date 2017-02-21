import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render () {
        return (
            <div className="intro-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intro-message">
                                <h1>Swivl test app</h1>
                                <h3>by Anatolii Mandrychenko</h3>
                                <hr className="intro-divider"/>
                                <ul className="list-inline intro-social-buttons">
                                    <li>
                                        <Link  to="users" className="btn btn-success btn-lg">
                                            Users list
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span
                                            className="network-name">Source code</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
