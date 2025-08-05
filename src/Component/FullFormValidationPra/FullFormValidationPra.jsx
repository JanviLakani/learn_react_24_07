
import React, { useState } from 'react';

const FullFormValidationPra = () => {

    const [form , setForm]=useState({
        email : '',
        age : 0,
        password : ''
    })


    const handleChange = (event) => {        
        setForm({...form , [event.target.name] : event.target.value})
    }

    return (
        <div>
            <input type="text" placeholder='enetr email' name='email' onChange={(e) =>handleChange(e)}/>

            <input type="number" placeholder='enetr number' name='age' onChange={handleChange}/>

            <input type="password" placeholder='enetr password' name='password' onChange={handleChange}/>





            


        <p>email :- {form.email}</p>
        <p>age :- {form.age}</p>
        <p>password :- {form.password}</p>




        </div>


        
    );
};

export default FullFormValidationPra;