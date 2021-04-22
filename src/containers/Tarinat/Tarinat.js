import React, { Component } from "react";

import AddTarina from './containers/AddTarina';
import ListItem from '../../components/ListItem';

class Tarinat extends Component {
    render() {
        return (
            <div>
                <h2>Tarina</h2>
                <p>Tähämpä sitten voi säveltää omaa juttuaan ja sivun sisältöä:</p>
                <AddTarina />
                <ListItem />
            </div >
        );
    }
}

export default Tarinat;