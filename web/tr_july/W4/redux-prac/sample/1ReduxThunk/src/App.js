import React from "react";
import * as stateActions from "./Actions/actions.js"
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
  decrease: () => dispatch(stateActions.decrementFunction())
});

class App extends React.Component {
    static propTypes = {
        counter:PropTypes.number,
        increase:PropTypes.func.isRequired,
        decrease:PropTypes.func.isRequired
    } 
    render() {
        return (
            <div>
                <div id='state_container'>{this.props.counter}</div>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
            </div>
        )
    }
}

App.defaultProps={
    counter:0
}

export default connect(mapStateToProps,mapDispatchToProps)(App);