import React, { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddTarina from './containers/AddTarina';
import TarinaLista from '../Tarinat/containers/TarinaLista';
import * as tarinaActions from '../Tarinat/tarinaActions';


function Tarinat(props) {
	const { haeTarinat } = props;
	useEffect(() => {
		haeTarinat();
	}, [haeTarinat]);

	return (
		<div>
			<h2>Tarina</h2>
			<p>Tähämpä sitten voi säveltää omaa juttuaan ja sivun sisältöä:</p>
			<AddTarina />
			<TarinaLista />
		</div >
	);
}
// Tämä saattaa olla erilainen
export default connect(
	(store) => ({
		tarinat: store.tarinoita.tarinat
	}),
	(dispatch) => bindActionCreators(tarinaActions, dispatch))(Tarinat);
