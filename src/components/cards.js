import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
    const pageUrl = "/" + props.tipo +"/"+ props.urlID

    return (
            <div className="card d-flex mx-3 my-2">
                <div className="imgCardContainer"><img src={props.cardImage}/></div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.children}</p>
                    <div className="cardFooter d-flex justify-content-between m-right: 3">
                        <Link to={pageUrl}  type="button" className="btn btn-primary">Learn more!</Link>
                        <Link to="" type="button" className="corazon btn btn-outline-warning align-self-end">♡</Link>
                    </div>
                </div>
            </div>
    )
}
