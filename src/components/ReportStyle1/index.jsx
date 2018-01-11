import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import './style.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ReportStyle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            users: []
        };
        this.cellEditProp= {
            mode: 'click',
            blurToSave: true
        };
        this.selectRowProp = {
            mode: 'checkbox'
        };
        this.options = {
            sortIndicator: false
        };

        this.userFormatter = this.userFormatter.bind(this);
    }

    componentWillMount(){
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

    userFormatter(cell, row) {
        for(var i in this.state.users) {
            if( +`${cell}` === this.state.users[i].id )
                return this.state.users[i].name
        }
    }

    render() {
        return (
            <div className = "ReportStyle1Class">
                <div className = "ReportStyle1Heading">
                <h2 className = "ReportStyle1Header">
                    Todos Report</h2>
                </div>
                {this.state.users.length>0 && 
                <BootstrapTable data={this.state.list} striped hover pagination search multiColumnSearch exportCSV insertRow deleteRow selectRow={ this.selectRowProp } cellEdit={ this.cellEditProp } options={this.options} >
                    <TableHeaderColumn dataField='id' isKey dataSort>PostId</TableHeaderColumn>
                    <TableHeaderColumn dataField='userId' dataFormat={this.userFormatter} dataSort>UserId</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' dataSort>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='completed' dataFormat={this.statusFormatter} headerAlign='left' dataAlign='center'>Completed</TableHeaderColumn>
                </BootstrapTable>
                }
                {/* you can give container classes, tablecontainer classes, headercontainerclass, bodycontainerclass, tableheaderclass, tablebodyclass, columnheaderclass, columnclass */}
            </div>
        );
    }
}

export default ReportStyle1;