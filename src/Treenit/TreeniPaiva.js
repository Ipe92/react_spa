import React, { useState } from "react";
import Sarja from "./Sarja";

function TreeniPaiva(props) {
    const [ohjelma, setOhjelma] = useState({});

    const onChange = (event) => {
        const { name, value } = event.target;
        setOhjelma({ ...ohjelma, [name]: value });
    };
    console.log({ ohjelma });
    return (
        <div>
            <input name="id_paiva" type="date" onChange={onChange} />
            <select name="paivan_fokus" onChange={onChange}>
                <option value=""></option>
                <option value="olkapaat">Olkapäät ja hartiat</option>
            </select>
            <Sarja name="pystyp" onChange={onChange} />
            <Sarja name="vipun_sivuille" onChange={onChange} />
            <Sarja name="pystysoutu_tangolla" onChange={onChange} />
        </div>
    );
}

export default TreeniPaiva;
