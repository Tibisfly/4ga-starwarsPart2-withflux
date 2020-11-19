import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const {store, actions} = useContext(Context);
    const handleClick = (event) => {
         actions.addFavorites(props.name)
     }
     //añadir a favorite via props ( en cards que es dondse se renderiza <Favorites />)
    return (
        <button  onClick= {handleClick} type="button" className="btn heart"><i className="corazon far fa-heart"></i></button>
    )
}