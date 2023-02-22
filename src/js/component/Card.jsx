import PropTypes from 'prop-types';
import React from 'react';

const Card = (props) => {
//style={{width: '19rem'}}
    return (
            <div className="card" >
            <img className="card-img-top" src="https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzMTcwMzU4OTEwNTkyNjcx/gettyimages-643977867.jpg" alt="" width="325" height="150"></img>
            <div className="card-body md-4.mb-5" >
                <h5 classname="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.location}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find out More</a>
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