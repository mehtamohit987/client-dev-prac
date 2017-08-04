import React from "react";
import * as stateActions from "../actions/actions";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainComponent from "../components/mainComponent"

const mapStateToProps = state => {
    let data = {counter: state.state.counter};
    return data;
};

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(stateActions.incrementFunction()),
        decrease: () => dispatch(stateActions.decrementFunction()),
        increaseAsync: () => dispatch(stateActions.incrementAsyncFunction()),
        loadApiAsync: () => dispatch(stateActions.loadApiResultsAsync())
        
    };
};

class App extends React.Component {
    render() {
        return <MainComponent counter={this.props.counter} increase={this.props.increase} decrease={this.props.decrease} increaseAsync={this.props.increaseAsync} loadApiAsync={this.props.loadApiAsync} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
