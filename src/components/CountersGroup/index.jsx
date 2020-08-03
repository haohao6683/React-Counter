import React from 'react';
import Counter from '../Counter';

class CountersGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            total : 0
        };
        this.handleChanges = this.handleChanges.bind(this);
    }

    changeEvent(e){
        this.setState({
            number: parseInt(e.target.value),
            total: 0
        });
    }

    handleChanges(e) {
        this.setState({
            total: this.state.total + e
        });
      }

    render(){
        return(
            <div>
                number of counters: <input id="numbers" type="text" onChange={(e)=>this.changeEvent(e)} />
                <br/>total: {this.state.total}
                {new Array(this.state.number).fill(0).map((value, index) => <Counter key={index}  getNumber={this.handleChanges}/>)} 
            </div>
        );
    }
    
}

export default CountersGroup;
