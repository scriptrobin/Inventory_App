import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fromStringWithSourceMap } from 'source-list-map';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">SHOP BRIDGE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item" >
                    {/* <a className="nav-link" ui-sref="inventoryList">Inventory</a> */}
                    <Link className="nav-link" to='/inventorylist'>Inventory</Link>
                </li>
            </ul>
        </div>
    </nav>
            </div>
        )
    }
}
