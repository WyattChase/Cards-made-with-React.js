import React from "react";
import propTypes from "prop-types";


const Card = (props) => {

    return (
        <>
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="" alt=""></img>
            <div className="card-body" style={{width: '18rem'}}>
                <h5 classname="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary" ></a>
            </div>
                </div>
        </>
            
    )   

};

Card.propTypes = {
    name : Proptypes.string,
    description : Proptypes.string,
    location : Proptypes.string


}