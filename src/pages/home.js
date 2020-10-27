import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";
import Jumbotron from "../components/jumbotron.js"
import Cards from "../components/cards.js"


function getID(url){
    return url.split("/")[5];
}

export default function(props) {
    const { store, actions } = useContext(Context)

    useEffect( ()=>{
        actions.getPlanets()
        actions.getPeople()
    }, [])

    return (
        <div className="firstPage container d-flex-row">
            <Jumbotron title="Character" />
            <div className="container-fluid d-flex cardScrollable">
                {store.people.map((person, key)=>{
                return (
                    <Cards tipo="character" title={person.name} urlID={getID(person.url)} key={key} cardImage="https://www.famefocus.com/wp-content/uploads/2017/05/conclusion-of-empire-1000x435.jpeg">
                        <p  key={key}>Gender: {person.gender}</p>
                        <p  key={key}>Hair-color: {person.hair_color}</p>
                        <p  key={key}>Eye-color: {person.eye_color}</p>
                    </Cards>
                )
                })}
            </div>
            <Jumbotron title="Planets" />
            <div className="container-fluid d-flex cardScrollable">
                {store.planets.map((planet, index)=>{
                    return (
                    <Cards tipo="planets" title={planet.name} urlID={getID(planet.url)} key={index} cardImage="https://static.wikia.nocookie.net/esstarwars/images/4/4c/TFA_galaxy_map.png/revision/latest?cb=20200204204632">
                        <p  key={index}>Population: {planet.population}</p>
                        <p  key={index}>Hair-color: {planet.terrain}</p>
                    </Cards>)
                })}
            </div>
        </div>
    )
}