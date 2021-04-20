import React, { useState } from 'react';

function AddTarina(props) {
    const [uusiTarina, setUusiTarina] = useState(undefined);

    const onSubmit = (event) => {
        event.preventDefault();
        props.onAddTarina(uusiTarina);
    };

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" onChange={event => setUusiTarina(event.target.value)} />
            <button type="submit">Lisää </button>
        </form>
    );
}

export default AddTarina;
