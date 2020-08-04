const counter = (state = {}, action = {}) => {
    //return diff state by diff String.
    switch(action.type){
        case 'INCREASE' : 
            return Object.assign({}, state, {count: state.count + 1});
        case 'DECREASE' :
            return Object.assign({}, state, {count: state.count - 1});
    }
    return state;
}

export default counter;