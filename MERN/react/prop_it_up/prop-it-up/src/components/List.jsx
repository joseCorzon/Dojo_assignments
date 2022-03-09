import React, { Component } from 'react';

class List extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        )
    }
}


export default List;