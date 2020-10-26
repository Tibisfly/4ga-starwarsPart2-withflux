import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div className="container-fluid">
            <div className="jumbotron my-3">
                <h1>{props.title}</h1>
            </div >
        </div>
    )
}