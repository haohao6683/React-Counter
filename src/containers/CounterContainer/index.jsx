import Counter from '../../components/Counter';
import { connect } from 'react-redux';

//i dont know this
const mapStateToProps = function (state) {
    return state;
  };
  
const mapDispatchToProps = function (dispatch) {
    return {
        //dispatch diff state by diff action type.
        increase: (id) => dispatch(increase(id)),
        decrease: (id) => dispatch(decrease(id))
    }
};
  
//bind the Counter component.
const CounterPackage = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default counter;