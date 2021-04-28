import React from 'react';
import PropTypes from "prop-types";

function ListItem(props) {
    return (
        <li className={props.className}>
            <span>{props.title}</span>
            {props.onRemove && <button onClick={() => props.onRemove()}>X</button>}
        </li>
    );
}
ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    onRemove: PropTypes.func,
};
export default ListItem;