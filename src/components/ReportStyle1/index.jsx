import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ReactLoading from 'react-loading';

import './style.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ReportStyle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            users: []
        };
        this.selectRowProp = {
            mode: 'checkbox'
        };
        this.options = {
            sortIndicator: false
        };

    }

    componentDidMount(){
        let currentComponent = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                currentComponent.setState({
                    users:response.data
                })
            })
            .catch(function(error) {
                console.log(error);
            })
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(function (response) {
				currentComponent.setState({
					  list: response.data
    			})
			})
			.catch(function (error) {
				console.log(error);
			});
    }

    statusFormatter(cell, row) {
        if( `${cell}` === 'true')
            return `<i class="fa fa-check"></i>`
        else
            return `<i class="fa fa-times"></i>`
    }

    // userFormatter(cell, row) {
    //     for(var i in this.state.users) {
    //         if( +`${cell}` === this.state.users[i].id )
    //             return this.state.users[i].name
    //     }
    // }

    render() {
        return (
            <div className = "ReportStyle1Class">
                
                <h2 className = "ReportStyle1Header">
                    Todos Report</h2>
                                {this.state.users.length>0? 
                <BootstrapTable data={this.state.list} striped hover pagination search multiColumnSearch exportCSV selectRow={ this.selectRowProp } options={this.options} 
                                containerClass="table">
                    <TableHeaderColumn dataField='id' isKey dataSort width = "10%">PostId</TableHeaderColumn>
                    <TableHeaderColumn dataField='userId' dataSort width= "10%">UserId</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' dataSort>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='completed' width = "20%" dataFormat={this.statusFormatter} headerAlign='left' dataAlign='center'>Completed</TableHeaderColumn>
                </BootstrapTable>
                : <ReactLoading type="bars" color="444" className="loader" />
                }
                 
                {/* you can give container classes, tablecontainer classes, headercontainerclass, bodycontainerclass, tableheaderclass, tablebodyclass, columnheaderclass, columnclass */}
            </div>

            
        );
    }
}

export default ReportStyle1;