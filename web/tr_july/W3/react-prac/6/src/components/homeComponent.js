import React from "react";

class NumberComponent extends React.Component {
    render () {
        return <input type="number"/>;
    }
}

class ModifiableNumberComponent extends React.Component {
    render () {
        return <div><NumberComponent/></div>;
    }
}

class HomeComponent extends React.Component {
    render () {
        return <ModifiableNumberComponent></ModifiableNumberComponent>;
    }
}

export default HomeComponent;
