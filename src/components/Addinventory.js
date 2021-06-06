import React, {Component} from 'react'
import { withRouter } from "react-router";
import {InventoryContext} from './context';


export default class Addinventory extends Component {
    
    static contextType = InventoryContext;

    constructor(props) {
        super(props);
        this.state= {
            productName:'',
            price: '',
            decription: '',
            keywords:''
        };
        // this.inventoryData =[];
        this.history = this.props.history;
    }
    componentDidMount() {
        this.inventoryData = this.context;
    }
    addInventory = (event) => {
        event.preventDefault();
        this.inventoryData.push({
            productName: this.state.productName,
            price: this.state.price,
            decription: this.state.decription,
            keywords: this.state.keywords
        });
        this.history.push('/inventoryList');
    }
    handleChange= (event) => {
        this.setState({
             [event.target.name]: event.target.value
        })
    }
    imageUpload() {
        console.log(this);
    }
    render() {
        let value = this.context;
        console.log(value);
        const fileName = "Choose";
        return (
            <div>
                <div className="card inventoryBox">
                  <h4> Add Inventory Details</h4>
                  <form className="inventroy-form">
                  <div className="form-group">
                    <label>Name</label>
                    <span className="font-red">*</span>
                     <input type="text" className="form-control" name="productName" onChange={this.handleChange} id="inputAddress" placeholder="Title" value={this.state.productName} required />
                     </div>
                     <div className="form-group">
                <label >Product Price</label>
                <span className="font-red">*</span>
                <input type="number" className="form-control" name="price" onChange={this.handleChange} id="inputAddress2" placeholder="Apartment, studio, or floor"
                   value={this.state.price} required />
            </div>
            <div className="form-group">
                <label >Description</label>
                <span className="font-red">*</span>
                <input type="text" className="form-control" name="decription" onChange={this.handleChange} id="inputAddress2" placeholder="Apartment, studio, or floor"
                     value={this.state.decription} required/>
            </div>
            <div className="form-group">
                <label >Keywords</label>
                <input type="text" className="form-control" name="keywords" onChange={this.handleChange} id="inputAddress2" placeholder="Apartment, studio, or floor"
                   value={this.state.keywords} />
            </div>
            <div className="form-group">
                <label >Product Image</label>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" name="imageUrl" id="inputGroupFile02"
                        onChange={this.imageUpload}/>
                    <label className="custom-file-label" >{fileName}</label>
    
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary"  onClick={this.addInventory}>Submit</button>
            </div>
                  </form>
                </div>
            </div>
        )
    }
}
