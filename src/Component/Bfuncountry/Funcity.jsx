
import React from 'react';

const Funcity = (props) => {
    return (
         <div style={{backgroundColor : "Blue" ,padding : "10px" , margin : "10px"}}>
      <h1>City Name : {props.cityName}</h1>
    </div>
    );
};

export default Funcity;