import React from 'react';

import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';


class FilterableProductTable extends React.Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div>
				<SearchBar/>
				<ProductTable data={{name:'axel', age:26}}/>
			</div>
			);
	}
}

export default FilterableProductTable;