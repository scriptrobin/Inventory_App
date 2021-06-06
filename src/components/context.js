import React, { Component } from 'react'

const InventoryContext = React.createContext();

class InventoryProvider extends Component {
    state = {
        data: []
    }
    render() {
        let data = [];
        return <InventoryContext.Provider value={this.state.data}>
             {this.props.children}
        </InventoryContext.Provider>
    }
}


const inventporyConsumer = InventoryContext.consumer;


export {InventoryProvider, InventoryContext, inventporyConsumer}