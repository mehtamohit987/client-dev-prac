import React from "react";
import PropTypes from "prop-types";


class Data extends React.Component {
    render () { return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
            </div>
        );
    }
}

Data.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.bool,
    propString: PropTypes.string,
    propObject: PropTypes.object

}
Data.defaultProps = {
    propObject: {objectName1: "default 1", objectName2: "default 2", objectName3: "default 3"},
    propArray: [1,2],
    propBool: false,
    propFunc: ()=>console.log(arguments) 
}

export default Data