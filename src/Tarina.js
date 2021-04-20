import React, { Component } from 'react';

function Tarina(props) {
    return (
        <li className="tarina">
            {props.title} <button onClick={() => props.onRemove()}>X</button>
        </li>
    );
}

export default Tarina;