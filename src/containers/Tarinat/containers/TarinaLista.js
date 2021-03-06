import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListItem from '../../../components/ListItem';
import * as tarinaActions from '../../MoniVeto/monivetoActions';

function TarinaLista(props) {
    const { tarinat, poistaTarina } = props;
    return (
        <ol>
            {tarinat.map((tarina) => (
                <ListItem
                    key={tarina.id}
                    title={tarina.title}
                    className="tarina"
                    onRemove={() => poistaTarina(tarina.id)} />
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
