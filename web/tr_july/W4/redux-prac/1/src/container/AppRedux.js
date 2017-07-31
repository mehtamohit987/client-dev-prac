import React from "react"
import * as stateActions from "../actions/actions.js"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainComponent from "../components/mainComponent"

const mapStateToProps = state => {
    let data = {counter: state.state.counter};
    return data;
};

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(stateActions.incrementFunction()),
        decrease: () => dispatch(stateActions.decrementFunction())
    };
};

class App extends React.Component {
    render() {
        return <MainComponent counter={this.props.counter} increase={this.props.increase} decrease={this.props.decrease} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
