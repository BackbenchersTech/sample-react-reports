import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ReportStyle2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			list: [],
			cols: []
        };
    }

	componentWillMount(){
		let currentComponent = this;
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(function (response) {
				let keys = currentComponent.getKeys(response.data[0]);
				currentComponent.setState({
					  list: response.data,
					  cols: keys
    			})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getKeys(data) {
		return Object.keys(data)
	}

    render() {	
        return (
            <div>
                <h2> Report Style 2</h2>
				{this.state.cols.map(column => console.log(column))}
				<BootstrapTable data={this.state.list} striped hover pagination search multiColumnSearch exportCSV keyField='id' >
					{this.state.cols.map(column =>
						<TableHeaderColumn dataField={column}>{column}</TableHeaderColumn>
					)}
				</BootstrapTable> 
            </div>
        );
    }
}

export default ReportStyle2;