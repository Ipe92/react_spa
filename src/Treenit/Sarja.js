import React, { useState, useRef } from "react";

function Sarja(props) {
    const [sarja, setSarja] = useState({});
    const setitRefs = [useRef(), useRef()];

    const onChange = (event) => {
        let { name, value } = event.target;
        if (name === "setit") {
            value = setitRefs.reduce((total, ref) => (ref.current.checked ? total + 1 : total), 0);
        }
        const newSarja = { ...sarja, [name]: value };
        setSarja(newSarja);
        props.onChange({ target: { name: props.name, value: newSarja } });
    };

    return (
        <div>
            <input name="paino" type="number" onChange={onChange} />
            <input name="setit" ref={setitRefs[0]} type="checkbox" onChange={onChange} />
            <input name="setit" ref={setitRefs[1]} type="checkbox" onChange={onChange} />
            <input name="toistot" type="range" onChange={onChange} />
        </div>
    );
}

export default Sarja;
