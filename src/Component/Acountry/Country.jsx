
import React, { Component } from 'react';

import FamousCity from './FamousCity';

class Country extends Component {

    constructor(props) {
        super(props);
        this.state={
            name : 'india',
            population : '135 mi',
            currency : 'rupee',

            city :"gandhinagar"
    
        }
    }

    handleCountry() {
        this.setState({
            name : 'uk',
            population : '30mi',
            currency : 'pound',
             city: "london"
        })
    }

    render() {
        return (
            <div>
                <h2>class base component</h2>
                <p>my country name is :- {this.state.name}</p>
                <p>my country population is :- {this.state.population}</p>
                <p>our country corancy is :- {this.state.currency}</p>

                <FamousCity cityName={this.state.city} />

                <button onClick={() => this.handleCountry()}> change country</button>
            </div>
        );
    }
}

export default Country;