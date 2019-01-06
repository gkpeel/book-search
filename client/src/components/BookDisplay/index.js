import React from "react";

export function BookGroup({ children }) {
    return (
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    );
}

export function BookDisplay({ props }) {
    return (
        <div className="col-12">
            <div className="book-heading d-flex">
                <div>
                    <p>{props.title}</p>
                    <p>Book Author</p>
                </div>
                <div className="book-buttons">
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-danger">Delete</a>
                </div>
            </div>
            <div>
                <img src="#" className="img-fluid" />
                <p>Lorem ipsum synopsis</p>
            </div>
        </div>
    )
}