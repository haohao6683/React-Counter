import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0
        };
    }

    increase = () =>{
        this.setState({
            number: this.state.number + 1
        });
        this.props.increase();
      }

    decrease = () =>{
        this.setState({
            number: this.state.number - 1
        });
        this.props.decrease();
    }

    render(){
        return(
            <div>
                <button onClick={this.increase}>+</button>
                    <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
    
}

export default Counter;
