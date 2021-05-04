import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddTarina from './containers/AddTarina';
import TarinaLista from '../Tarinat/containers/TarinaLista';
import * as tarinaActions from '../Tarinat/tarinaActions';


class Tarinat extends Component {
	componentDidMount() {
		fetch("http://localhost:4000/tarinat")
			.then(response => response.json())
			.then(data => {
				data.forEach((tarina) => this.props.lisaaTarina(tarina));
			});
	}
	render() {
		return (
			<div>
				<h2>Tarina</h2>
				<p>Tähämpä sitten voi säveltää omaa juttuaan ja sivun sisältöä:</p>
				<AddTarina />
				<TarinaLista />
			</div >
		);
	}
}

export default connect(null, (dispatch) => bindActionCreators(tarinaActions, dispatch))(Tarinat);
