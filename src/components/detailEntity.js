import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    const [detail, setDetail] = useState({})
    const params = useParams()
    console.log(props.tipo)

useEffect(()=>{
    if (props.tipo == "people"){
        setDetail(store.people[params.id])
    }else{
        if(props.tipo == "planets"){
            setDetail(store.planets[params.id])
        }
    }
}, [])

    return (
     <>
        <div className="card mb-3" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/originals/1d/cf/f7/1dcff7f4e1613d9e071a99ef8725402a.jpg" className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{detail.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div> 
        </div> 
            <div class="divider bg-warning"></div>
            <div className="row d-flex ml-5">
                <div className= "col-2 text-warning">Name</div>
                <div className= "col-2 text-warning">Name</div>
                <div className= "col-2 text-warning">Name </div>
                <div className= "col-2 text-warning">Name </div>
                <div className= "col-2 text-warning">Name </div>
                <div className= "col-2 text-warning">Name</div>
            </div>
            <p>{detail.residents}</p>
   
        </>

    )
}
// hacer un if que si tipos==people me haga un HTML y sino me haga otro HTML