import React from "react";

function Navbar() {
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Book-It</a>
                <ul className="nav justify-content-end text-light">
                    <li>
                        <a className="nav-link text-light bg-dark" href="/">Search</a>
                    </li>
                    <li>
                        <a className="nav-link text-light bg-dark" href="/">Saved</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;