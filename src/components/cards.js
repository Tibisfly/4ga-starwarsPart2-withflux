import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store";
import HeartButton from "./heartButton"

export default function (props) {
    const {store, actions} = useContext(Context);
    
    const pageUrl = "/" + props.tipo +"/"+ props.urlID
    console.log(props.tipo)
    console.log(props.resource)

    return (
            <div className="card d-flex mx-3 my-2">
                <div className="imgCardContainer"><img src={props.cardImage}/></div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                   {props.children}
                    <div className="cardFooter d-flex justify-content-between m-right: 3">
                        <Link to={pageUrl}  type="button" className="btn btn-primary">Learn more!</Link>
                        <HeartButton name={props.favorite} />
                    </div>
                </div>
            </div>
    )
}
