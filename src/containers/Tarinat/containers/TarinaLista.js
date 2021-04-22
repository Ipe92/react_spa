import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListItem from '../../../components/ListItem';
import * as tarinaActions from '../tarinaActions';

function TarinaLista(props) {
    const { tarinat, poistaTarina } = props;
    return (
        <ol>
            {tarinat.map((tarina, index) => (
                <ListItem
                    key={index}
                    title={tarina}
                    className="tarina"
                    onRemove={() => poistaTarina(index)} />
            ))}
        </ol>
    );
}

export default connect(
    (store) => {
        return {
            tarinat: store.tarinoita.tarinat
        };
    },
    (dispatch) => bindActionCreators(tarinaActions, dispatch))
    (TarinaLista);
