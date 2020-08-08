import { connect } from 'react-redux';
import {addTotal,minusTotal} from '../../action'
import CountersGroup from '../../components/CountersGroup';

const mapStateToProps = (state) => {
    return {total: state.counterGroup.total}
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        addTotal: () => dispatch(addTotal()),
        minusTotal: () => dispatch(minusTotal())
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CountersGroup);
