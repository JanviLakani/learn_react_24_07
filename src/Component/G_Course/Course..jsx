
import React, { useState } from 'react';
import Fees from './Fees';





const Course = () => {

    const [selectedcourse ,setSelectedcourse] = useState("")

console.log("selectedcourse",selectedcourse);



    return (
        <div>
            <select name="course" onClick={ (e) => setSelectedcourse(e.target.value)}>
                <option value="0">--select course--</option>
                <option value="fd">Full stack devlopment</option>
                <option value="ui_ux">UI-UX</option>
                <option value="python">PYTHON Dev</option>
            </select>

        <Fees cf={selectedcourse} />

        </div>

        
    );
};

export default Course;