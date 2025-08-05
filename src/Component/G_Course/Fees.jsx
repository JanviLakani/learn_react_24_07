
import React from 'react';

function Fees(props) {

console.log("sendig props",props.cf);

const allCourseFees = {
    fd : 85000,
    ui_ux : 45000,
    python : 75000
 
    
}

 console.log("fees" ,allCourseFees[props.cf]);

    return (
        <div>
          <h3>fees :- {allCourseFees[props.cf]}</h3>  
        </div>
    );
}

export default Fees;