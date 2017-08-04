import {connect} from "react-redux";
import {setFilter} from '../actions/actionCreators';
import Link from '../components/linkComponent';

const FilterLinkContainer = connect( (state, ownProps)=>{return {active: ownProps.filter===state.state.filter}}, (dispatch, ownProps)=>{ return { onClick: ()=> dispatch(setFilter(ownProps.filter))} })(Link);
export default FilterLinkContainer;
