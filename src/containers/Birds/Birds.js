import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListItem from '../../components/ListItem';
import * as birdsAction from './birdsAction';

function Birds(props) {

    const { birds, getBirds } = props;

    useEffect(() => {
        getBirds();
    }, [getBirds]);

    return (<ol>
        {birds.map((bird) => (
            <ListItem key={bird.id} title={bird.name} />
        ))}
    </ol>
    );
}

export default connect(
    store => {
        return { birds: store.birds.list };
    },
    dispatch => bindActionCreators(birdsAction, dispatch)
)(Birds);