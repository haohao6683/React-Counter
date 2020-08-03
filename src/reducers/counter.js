const counter = (state = {}, action = {}) => {
    switch(action.type){
        case 'INCREASE' : 
            return Object.assign({}, state, {count: state.count + 1});
        case 'DECREASE' :
            return Object.assign({}, state, {count: state.count - 1});
    }
    return state;
}

export default counter;