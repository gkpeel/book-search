import React from "react";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row px-3 my-5">
                    <div className="display-4 text-left mb-4">
                        Search for a book and add it to your wishlist
                    </div>
                    {children}
                    <h4 className="text-right text-muted fw-thin mt-4">(Amazon doesn't have a monopoly on doing that...yet.)</h4>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;