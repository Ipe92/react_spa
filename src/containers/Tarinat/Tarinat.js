import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddTarina from './containers/AddTarina';
import TarinaLista from '../Tarinat/containers/TarinaLista';
import * as tarinaActions from '../Tarinat/tarinaActions';


class Tarinat extends Component {
	componentDidMount() {
		this.props.haeTarinat();
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
	//https://slides.com/lukasgrolig
}

export default connect(null, (dispatch) => bindActionCreators(tarinaActions, dispatch))(Tarinat);
