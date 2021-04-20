import React from 'react';

import Tarina from './Tarina';

function TarinaLista(props) {
    const { tarinat, onRemoveFromList } = props;
    return (
        <ol>
            {tarinat.map((tarina, index) => (
                <Tarina
                    key={index}
                    title={tarina}
                    onRemove={() => onRemoveFromList(index)} />
            ))}
        </ol>
    );
}

export default TarinaLista;