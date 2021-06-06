import React, { Component } from 'react'

export default class TableData extends Component {
    constructor(props) {
      super(props);
      this.inventoryDataList = this.props.tableList;
    }
    render() {
        return (
            <div>
                <table className="table table-striped table-bordered" id="inventoryTable">
             <thead>
                 <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Product Price</th>
                     <th>Action</th>
                     <th>Preview</th>
                     <th>Delete</th>
                 </tr>
             </thead>
             <tbody> 
                  {this.inventoryDataList.map((val, i) => {
                   return <tr key={i.toString()}>
                    <td>{i}</td>
                    <td>{val.productName}</td>
                    <td>{val.price}</td>
                    <td><button type="button btn-sm" className="btn btn-link" onClick={this.editDetails.bind(this, val)}>Modify</button></td>
                    <td><button type="button btn-sm" className="btn btn-link" onClick={this.editDetails.bind(this)}>Modify</button></td>
                    <td><button type="button btn-sm" className="btn btn-link" onClick={this.editDetails.bind(this)}>Modify</button></td>
                    </tr>
                    })}
             </tbody>
            </table>
            </div>
        )
    }
}
