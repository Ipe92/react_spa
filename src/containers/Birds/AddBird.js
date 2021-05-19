import React, { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addBird } from './birdsAction';

const conservationStatuses = {
    LC: "Least Concern",
    NT: "NT",
    VU: "VU",
    EN: "EN",
    CR: "CR",
    EW: "EW",
    EX: "EX",
}

function AddBird(props) {
    const [htmlFormData, sethtmlFormData] = useState({
        name: "",
        genus: "",
        species: "",
        cs2015: "LC",
        cs2010: "LC",
        cs2000: "LC",
        count2015: 0,
    });

    const onSubmit = (event) => {
        event.preventDefault();
        props.addBird(htmlFormData);
    };

    const onChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        sethtmlFormData({ ...htmlFormData, [fieldName]: value });
    }
    console.log({ htmlFormData });


    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label htmlFor="name">Nimi: </label>
                <input
                    type="text"
                    name="name"
                    onChange={event => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="genus">Suku: </label>
                <input
                    type="text"
                    name="genus"
                    onChange={event => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="species">Laji: </label>
                <input
                    type="text"
                    name="species"
                    onChange={event => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="cs2015">Elinvoimaisuus 2015: </label>
                <select
                    name="cs2015"
                    onChange={event => onChange(event)}
                >
                    {Object.entries(conservationStatuses).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="cs2010">Elinvoimaisuus 2010: </label>
                <select
                    name="cs2010"
                    onChange={event => onChange(event)}
                >
                    {Object.entries(conservationStatuses).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="cs2000">Elinvoimaisuus 2000: </label>
                <select
                    name="cs2000"
                    onChange={event => onChange(event)}
                >
                    {Object.entries(conservationStatuses).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="count2015">Yksilömäärä 2015: </label>
                <input
                    type="number"
                    name="name"
                    onChange={event => onChange(event)}
                />
            </div>
            <button type="submit">Lisää</button>
        </form >
    );
};
export default connect(null, dispatch => bindActionCreators({ addBird }, dispatch))(AddBird);
