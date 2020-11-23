import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store"

export default function Favorite(props) {
    const { store, actions } = useContext(Context);
    const [ListFav, setListFav] = useState([])

    useEffect(()=>{
        setListFav(actions.getFavorites())
    }, [])

    return(
    <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favorites
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
          
            {actions.getFavorites().map( (fav, index) =>  { 
                return (<a className="dropdown-item" href="#">{fav}<button onClick={() => actions.deleteFavorites(fav)} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button></a>)
            })
            }     
            </div>
        </div>
    );
}