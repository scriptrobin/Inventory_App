import React, { Component } from 'react'

export default class Inventorydetails extends Component {
    constructor(props) {
        super(props)
        this.inventoryData = this.props.selectedInventory;
        this.stateView = this.props.stateView;
        this.onEdit = this.props.onEdit
        this.state = this.inventoryData;
    }
    submitInventoryDetails(event) {
        event.preventDefault();
        this.inventoryData.view = true;
        this.onEdit(this.state,event);
    }
    handleChange(event) {
        this.setState({
             [event.target.name]: event.target.value
        });
    }
    render() {
        const fileName = "Choose";
        
        return (
            <div className="row">
    <div className="col-md-6 ">
        <div className="inventory-img-box">
            <img className="inventory-img" alt="alt"/>
        </div>
        <div className="form-group" >
            <div className="custom-file">
                <label className="custom-file-label">{fileName}</label>
            </div>
        </div>
    </div>

    <div className="col-md-6">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="productName"  onChange={this.handleChange.bind(this)} value={this.state.productName} required />
        </div>
        <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control" name="price"  onChange={this.handleChange.bind(this)} value={this.state.price} required />
        </div>
        <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" name="decription" onChange={this.handleChange.bind(this)} value={this.state.decription} required />
        </div>
        <div className="form-group">
            <label>Keyword</label>
            <input type="text" className="form-control" name="keywords" onChange={this.handleChange.bind(this)} value={this.state.keywords} required />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={this.submitInventoryDetails.bind(this)}>Submit</button>
        </div>
    </div>
</div>
        )
    }
}
