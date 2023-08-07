import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to='/'>Autentication</Link>
                </li>
                <li>
                    <Link to='/cryptocoin'>Cryptocoin</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/transaction'>Transaction</Link>
                </li>
                <li>
                    <Link to='/transfer'>Transfer</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav