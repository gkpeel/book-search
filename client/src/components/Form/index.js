import React from "react";

export function Input(props) {
    return (
        <div className="d-block w-100">
            <input className="form-control d-block" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn btn-success">
            {props.children}
        </button>
    )
}