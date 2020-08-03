import React from 'react';
import Counter from '../Counter';

class CountersGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0
        };
    }

    changeEvent(e){
        {
            this.setState({
                number: parseInt(e.target.value)
            });
        }
    }

    render(){
        return(
            <div>
                number of counters: <input id="numbers" type="text" onChange={(e)=>this.changeEvent(e)} />
                {new Array(this.state.number).fill(0).map((value, index) => <Counter key={index} />)}
            </div>
        );
    }
    
}

export default CountersGroup;
