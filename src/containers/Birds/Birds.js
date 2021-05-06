import React from 'react';
import ListItem from '../../components/ListItem';

function Birds(props) {
    const birds = [
        {
            "id": 1,
            "name": "Harakka"
        },
        {
            "id": 2,
            "name": "Peipponen"
        }
    ];
    return (<ol>
        {birds.map((bird) => (
            <ListItem title={bird.name} />
        ))}
    </ol>
    );
}

export default Birds;