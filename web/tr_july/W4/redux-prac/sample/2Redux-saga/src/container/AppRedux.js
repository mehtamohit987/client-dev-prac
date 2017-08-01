import React from "react";
import * as stateActions from "../Actions/actions.js"
import {default as Apps} from "../component/AppRedux";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

const mapStateToProps = state => {    
  var data = {
      counter: state.state.counter
  };
    return data;
}
const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(stateActions.incrementFunction()),
  decrease: () => dispatch(stateActions.decrementFunction()),
  increaseAsync: () =>dispatch(stateActions.incrementAsyncFunction())
});

class App extends React.Component { 
    render() {
        return (
           <Apps increaseAsync={this.props.increaseAsync} increase={this.props.increase} decrease={this.props.decrease} counter={this.props.counter}/>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);