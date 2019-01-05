import React from "react";
import { Input } from "../Form";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row px-3 my-5">
                    <div className="display-4 text-left mb-4">
                        Search for a book and add it to your wishlist
                    </div>
                    <Input></Input>
                    <h4 className="muted fw-thin">(Amazon doesn't have a monopoly on doing that...yet.)</h4>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;