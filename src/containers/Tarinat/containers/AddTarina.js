import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TarinaActions from '../tarinaActions';

function AddTarina(props) {
    const [uusiTarina, setUusiTarina] = useState(undefined);

    const onSubmit = (event) => {
        event.preventDefault();
        props.lisaaTarina(uusiTarina);
    };

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" onChange={event => setUusiTarina(event.target.value)} />
            <button type="submit">Lisää </button>
        </form>
    );
}

export default connect(null, dispatch => bindActionCreators(TarinaActions, dispatch))(AddTarina);
