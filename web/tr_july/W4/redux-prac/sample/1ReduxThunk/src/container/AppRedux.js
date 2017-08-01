import React from "react";
import { actionCreators,startIncrementAsync } from "../ActionCreators/actions.js"
import { default as Apps } from "../component/AppRedux";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    var data = {
        counter: state.counter
    };
    return data;
}
const mapDispatchToProps = state => dispatch => ({
    increase: () =>{
      
        // console.log(state());
           dispatch(actionCreators.increment());
    } ,
    decrease: () => dispatch(actionCreators.decrement()),

    increaseAsync: () => setTimeout(function () {
        dispatch(actionCreators.increment())
    }, 1000),
    
   increaseAsyncThunk: () => dispatch(startIncrementAsync())
});

class App extends React.Component {
    render() {
        return (
            <Apps increaseAsyncThunk={this.props.increaseAsyncThunk} increaseAsync={this.props.increaseAsync} increase={this.props.increase} decrease={this.props.decrease} counter={this.props.counter} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);