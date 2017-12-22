import React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ReportStyle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                id: 1,
                name: 'Product1',
                price: 120
            }, {
                id: 2,
                name: 'Product2',
                price: 80
            }]
        };
        this.cellEditProp= {
            mode: 'click',
            blurToSave: true
        };
        this.selectRowProp = {
            mode: 'checkbox'
        };
        this.options = {
            sortIndicator: false,
        };
    }

    priceFormatter(cell, row) {
        return `<i class="glyphicon glyphicon-usd"></i> ${cell}`;
    }

    render() {
        return (
            <div>
                <h2>Report Style 1</h2>
                <BootstrapTable data={this.state.products} striped hover pagination search multiColumnSearch insertRow deleteRow exportCSV selectRow={ this.selectRowProp } cellEdit={ this.cellEditProp } options={this.options}>
                    <TableHeaderColumn isKey dataField='id' dataSort>ProductID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort csvHeader='product-name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
                </BootstrapTable>
                {/* you can give container classes, tablecontainer classes, headercontainerclass, bodycontainerclass, tableheaderclass, tablebodyclass, columnheaderclass, columnclass */}
            </div>
        );
    }
}

export default ReportStyle1;