import React from "react";

export function FormBtn(props) {
    return (
        <button {...props} className="btn btn-success w-25 ml-1">
            {props.children}
        </button>
    )
}

export function Input(props) {
    return (
        <div className="d-block w-75">
            <input className="form-control d-block" {...props} />
        </div>
    );
}