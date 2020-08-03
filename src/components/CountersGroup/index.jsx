import React from 'react';
import Counter from '../Counter';

class CountersGroup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {new Array(5).fill(0).map(() => <Counter />)}
            </div>
        );
    }
    
}

export default CountersGroup;
