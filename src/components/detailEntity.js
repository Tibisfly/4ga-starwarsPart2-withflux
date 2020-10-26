import React from "react";
import { Link, useParams } from "react-router-dom";

export default function(props) {
    const params = useParams()

    return (
        <div className="card mb-3" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/originals/1d/cf/f7/1dcff7f4e1613d9e071a99ef8725402a.jpg" className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{params.id}{props.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}