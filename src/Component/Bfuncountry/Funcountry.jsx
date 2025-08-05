

import React, { useState } from 'react';

import Funcity from './Funcity';

const Funcountry = () => {

    const [country ,setCountry] = useState({
    name: 'india',
    population: '135 mi',
    currency: 'ruppee',

     city: "gandhinagar",
    })


    const handleCountry = () => {
        setCountry({
             name: 'uk',
    population: '30 mi',
    currency: 'pound',
      city: "london",
        })
    }


    return (
        <div>
            <h1>function base component</h1>
            <h2>name :-  {country.name}</h2>
            <h2>population :- {country.population}</h2>
            <h2>curancy :- {country.currency}</h2>

             <Funcity cityName={country.city} />

            <button onClick={ () => handleCountry()}>change country</button>
        </div>
    );
};

export default Funcountry;