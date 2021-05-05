import React, { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as monivetoActions from './monivetoActions';

function MoniVeto(props) {
    const { haeMonivedot } = props;
    useEffect(() => {
        haeMonivedot();
    }, [haeMonivedot]);

    return (
        <div>
            <h2>Moniveto</h2>
        </div >
    );
}

export default connect(null, (dispatch) =>
    bindActionCreators(monivetoActions, dispatch))(MoniVeto);