import React from 'react';
import axios from 'axios';

import Card from '../Card';

import './style.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ReportStyle2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			pending: false,
			list: [],
			cols: []
		};
		this.options = {
			sortIndicator: false
		};
    }

	componentDidMount(){
		let currentComponent = this;
		axios.get('https://jsonplaceholder.typicode.com/posts/')
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
		return Object.keys(data);
	}

    render() {
        return (
            <div className="reportStyle2Class">
                <h2>Posts Report</h2>
				{ (this.state.list.length>0)?
					(this.state.list.map((post) =>
						<Card key={post.id.toString()} post={post} />))
					:"Data Loading..."
				}
            </div>
        );
    }
}

export default ReportStyle2;