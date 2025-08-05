
import React, { useState } from 'react';

const PasswordToggle = () => {

    const [password ,setPassword] = useState(false)

    const handleToggle = () => {
        setPassword(!password)
    }

    return (
        <div>
            <input type={password ? 'text' : 'password'} placeholder='enter password' />

            <button onClick={ () => handleToggle()}>

            { password ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i> } 

            </button>
        </div>
    );
};

export default PasswordToggle;