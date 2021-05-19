import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Form from "@rjsf/core";

import { addBird } from "./birdsAction";

const conservationStatuses = {
    LC: "Elinvoimainen laji",
    NT: "Silmälläpidettävä laji",
    VU: "Vaarantunut laji",
    EN: "Erittäin uhanalainen laji",
    CR: "Äärimmäisen uhanalainen laji",
    EW: "Luonnosta hävinnyt laji",
    EX: "Hävinnyt laji",
};
const defaultFormData = {
    name: "",
    genus: "",
    species: "",
    cs2015: "LC",
    cs2010: "LC",
    cs2000: "LC",
    count2015: 0,
};

function AddBird(props) {
    const onSubmit = (event) => {
        console.log(event.formData);
        props.addBird(event.formData);
    };

    const schema = {
        type: "object",
        properties: {
            name: { type: "string", title: "Nimi" },
            genus: { type: "string", title: "Suku" },
            species: { type: "string", title: "Laji" },
            cs2015: {
                type: "string",
                title: "Elinvoimaisuus 2015:",
                enum: Object.keys(conservationStatuses),
                enumNames: Object.values(conservationStatuses),
            },
            cs2010: {
                type: "string",
                title: "Elinvoimaisuus 2010:",
                enum: Object.keys(conservationStatuses),
                enumNames: Object.values(conservationStatuses),
            },
            cs2000: {
                type: "string",
                title: "Elinvoimaisuus 2000:",
                enum: Object.keys(conservationStatuses),
                enumNames: Object.values(conservationStatuses),
            },
            count2015: { type: "number", title: "Yksilömäärä" },
        },
    };

    return (
        <Form schema={schema} formData={defaultFormData} onSubmit={(event) => onSubmit(event)}>
            <button type="submit">Lisää</button>
        </Form>
    );
}
export default connect(null, (dispatch) => bindActionCreators({ addBird }, dispatch))(AddBird);
