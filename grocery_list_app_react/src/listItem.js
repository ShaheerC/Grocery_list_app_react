
import React from 'react';

class ListItem extends React.Component{
    state = {
        quantity: 1,
        category:this.props.category,
        item: this.props.item
    }
    updateValueDown = (newValue) =>{
        let down = this.state.quantity
        if(this.state.quantity!== 0) down = this.state.quantity -= 1
        this.setState({quantity: down})
    }
    updateValueUp = (newValue) =>{
        let up = this.state.quantity += 1
        this.setState({quantity: up})        
    }
    render(){
    return(
    <li className={this.state.category}>
        <button onClick={ () => { this.updateValueDown() } }>-</button>
        <span>{this.state.quantity} {this.state.item}</span>
        <button onClick={ () => { this.updateValueUp() } } >+</button>
    </li>
    )
    }
}

export default ListItem