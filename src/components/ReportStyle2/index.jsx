import React from 'react';
import axios from 'axios';

class ReportStyle2 extends React.Component {

    constructor(props) {
        super(props);
         this.state = {
            list: []
        };
    }

	componentDidMount(){
		let currentComponent = this;
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(function (response) {
				console.log(response);
				currentComponent.setState({
      				list: response.data
    			})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

    render() {
    	 console.log(this.state.list);
    	 var res = [];
    	 res = this.state.list;
    	 console.log(res);
			
        return (
            <div>
                <h2>Report Style 2</h2>
                <p>Loreem Ipsum</p>
                <p>Dolor sit amet</p>
                
               
            </div>
        );
    }
}

export default ReportStyle2;