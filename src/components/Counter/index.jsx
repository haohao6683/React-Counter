import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState({
            number: this.state.number + 1
        });
        this.props.getNumber(1)
      }

    decrease() {
        this.setState({
            number: this.state.number - 1
        });
        this.props.getNumber(-1)
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
