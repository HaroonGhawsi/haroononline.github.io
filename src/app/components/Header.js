import React from "react";
import { Link } from "react-router";

export class Header extends React.Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark info-color">
                <Link className="navbar-brand" to={"/"}>Afham</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <li><Link className="nav-link" to={"/blog"}>Blog</Link></li>
                        </li>
                        <li className="nav-item">
                            <li><Link className="nav-link" to={"/projects"}>Projects</Link></li>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-success mr-sm-2" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </nav>

        );
    }
}