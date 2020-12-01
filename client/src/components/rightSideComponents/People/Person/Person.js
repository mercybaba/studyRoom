import React from "react";
import "./Person.css"; 

const Person = ( {person} )=> {
    return (
        <div className = "namecontainer">
            <div className="person">
            {person}
            </div>
        </div>
    ); 
}

export default Person;