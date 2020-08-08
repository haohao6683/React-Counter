const countersGroup = (state = {total: 0}, action = {}) => {
    switch(action.type){
        case 'INCREASE' : 
            state.total += 1;
            return state;
        case 'DECREASE' :
            state.total -= 1;
            return state;
        default : return state;
    }
}

export default countersGroup;