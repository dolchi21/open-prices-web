import React from 'react';
import {Link} from 'react-router';

import FilterableProductTable from '../components/FilterableProductTable.jsx'

var db = []

export default class Store extends React.Component {
	constructor () { super() }
	render () {
		var db = this.props.products || []
		return (
			<FilterableProductTable store={db}/>
			);
	}
}