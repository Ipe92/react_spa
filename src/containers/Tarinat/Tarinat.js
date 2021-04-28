import React, { Component } from "react";

import AddTarina from './containers/AddTarina';
import TarinaLista from '../Tarinat/containers/TarinaLista';

class Tarinat extends Component {
    render() {
        return (
            <div>
                <h2>Tarina</h2>
                <p>Tähämpä sitten voi säveltää omaa juttuaan ja sivun sisältöä:</p>
                <AddTarina />
                <TarinaLista />
            </div >
        );
    }
}

export default Tarinat;