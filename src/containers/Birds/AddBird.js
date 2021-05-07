import React, { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addBird } from './birdsAction';

function AddBird(props) {
    const [birdName, setBirdName] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        props.addBird({ name: birdName });
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" onChange={event => setBirdName(event.target.value)} />
            <button type="submit">Lisää</button>
        </form>
    );
}

export default connect(null, dispatch => bindActionCreators({ addBird }))(AddBird);
