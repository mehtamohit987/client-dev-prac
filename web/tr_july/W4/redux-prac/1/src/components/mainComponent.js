import React from "react"
import PropTypes from "prop-types";

class MainComponent extends React.Component {    
    static PropTypes = {dispatch: PropTypes.func.isRequired}
    render() {
        return (
            <div>
                <div id="state_container">{this.props.counter}</div>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
            </div>
        );
    }
}
MainComponent.defaultProps = {
    counter: 0
};
export default MainComponent;