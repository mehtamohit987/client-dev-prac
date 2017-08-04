import React from "react"
import PropTypes from "prop-types";

class MainComponent extends React.Component {    
    static propTypes = {
        counter:PropTypes.number,
        increase:PropTypes.func.isRequired,
        decrease:PropTypes.func.isRequired,
        increaseAsync: PropTypes.func.isRequired,
        loadApiAsync: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                <div id="state_container">{this.props.counter}</div>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
                <button onClick={this.props.increaseAsync}>+ Async</button>
                <button onClick={this.props.loadApiAsync}>Api Async</button>
            </div>
        );
    }
}
MainComponent.defaultProps = {
    counter: 0
};
export default MainComponent;