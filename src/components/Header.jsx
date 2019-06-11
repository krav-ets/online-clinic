import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-success">
                <Link to="/" className="navbar-brand">ONLINE CLINIC</Link>
                <Link to="/profile" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </Link>
            </nav>
        );
    }
}

