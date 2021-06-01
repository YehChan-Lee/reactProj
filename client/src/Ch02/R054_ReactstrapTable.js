import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component{
    render(){
        return(
                 <Table dark bordered>
               {/* <Table striped hover>
        <Table borderless size="sm">*/}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>React 100</td>
                        <td>10000원</td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>React 200</td>
                        <td>20000원</td>
                    </tr>
                </tbody>

            </Table>
        )
    }
}

export default R054_ReactstrapTable;