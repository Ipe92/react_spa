import React, { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as monivetoActions from './monivetoActions';

function MoniVeto(props) {
    const { haeMonivedot, veikkaus } = props;
    useEffect(() => {
        haeMonivedot();
    }, [haeMonivedot]);

    console.log("VEIKKAUS", veikkaus);
    return (
        <div>
            <h2>Moniveto</h2>
            {veikkaus?.monivedot?.map((moniveto) => (
                <div key={moniveto.id}>
                    <div>{new Date(moniveto.closeTime).toLocaleString()}</div>
                    <div>
                        {moniveto.rows.map(row => <div key={row.id}>{row.name}</div>)}
                    </div>
                </div>
            ))}
        </div >
    );
}

export default connect(
    (store) => ({
        veikkaus: store.veikkaus,
    }),
    (dispatch) => bindActionCreators(monivetoActions, dispatch)
)(MoniVeto);