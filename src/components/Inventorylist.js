import React, { Component } from 'react'
import Inventorydetails from './Inventorydetails';
import { removeTypeDuplicates } from '@babel/types';
import {InventoryContext} from './context';
export default class Inventorylist extends Component {
    static contextType = InventoryContext;

    constructor(props) {
        super(props)
        this.state = {isView: false, inventoryDataList: []}; 
        this.selectedInventory = '';
    }
    componentDidMount() {
        let inventoryDataList = this.context;
        this.setState({
            inventoryDataList: inventoryDataList
        })
    }
    editDetails(value,index, event) {
      event.preventDefault();
      this.setState({isView: true});
      value.index = index;
      this.selectedInventory = value;
    }
    showEditDetails(value) {
        this.setState({isView: false});
        this.selectedInventory = value;
        this.state.inventoryDataList[value.index] = value;
    }
    deleteRow(index) {
      this.state.inventoryDataList.splice(index, 1);
      this.setState({inventoryDataList: this.state.inventoryDataList});
    }
    render() {
        let isView=this.state.isView;
        let details = '';
        return (
            <div className="card inventoryBox">
            {isView ? 
               <Inventorydetails selectedInventory={this.selectedInventory} stateView={this.state.isView} onEdit={this.showEditDetails.bind(this)}></Inventorydetails>
                : 
                <table className="table table-striped table-bordered" id="inventoryTable">
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Name</th>
                         <th>Product Price</th>
                         <th>Action</th>
                         <th>Delete</th>
                     </tr>
                 </thead>
                 <tbody> 
                      {this.state.inventoryDataList.map((val, i) => {
                       return <tr key={i}>
                        <td style={{textAlign: 'center'}}>{i}</td>
                        <td>{val.productName}</td>
                        <td>{val.price}</td>
                        <td><button type="button btn-sm" className="btn btn-link" onClick={this.editDetails.bind(this, val, i)}>Modify</button></td>
                        <td><button type="button btn-sm" className="btn btn-link" onClick={this.deleteRow.bind(this, i)}>Delete</button></td>
                        </tr>
                        })}
                 </tbody>
                </table>
            }
              </div>
        ) 
    }
}
