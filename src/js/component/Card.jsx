import PropTypes from 'prop-types';
import React from 'react';

const Card = (props) => {

    return (
            <div className="card" style={{width: '18rem' } }>
            <img className="card-img-top" src="" alt=""></img>
            <div className="card-body" style={{width: '18rem'}}>
                <h5 classname="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p classname="card-text">${props.location}</p>
                <a href="#" className="btn btn-primary" >Find out More</a>
            </div>
                </div>
            
    )   

};

Card.propTypes = {
    name : PropTypes.string,
    description : PropTypes.string,
    location : PropTypes.string

}


export default Card;