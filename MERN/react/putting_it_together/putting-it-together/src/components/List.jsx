import React, { Component } from 'react';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };

        this.ageHandler = ()=>{
            console.log("hit the age handler")
            this.setState({age: this.state.age +1})
        }
    }



    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick = {this.ageHandler}>Birthday!</button>
            </div>
        )
    }
}


export default List;