import React from "react"

class TextBox extends React.Component {
    constructor (props) {                           //getInitialState
        super(props);
        this.value=this.props.value || "Const";
       this.handleChange = this.handleChange.bind(this);
       this.state = {
           text: "Hello"
       }
    }

    componentWillMount() {console.log('TextBox WillMount');}
    componentDidMount() {console.log('TextBox DidMount');}
    componentWillReceiveProps() {console.log('TextBox WillReceiveProps');}
    // shouldComponentUpdate() {console.log('TextBox ShouldUpdate');return true;}
    componentWillUpdate() {console.log('TextBox WillUpdate');}
    componentDidUpdate() {console.log('TextBox DidUpdate');}
    componentWillUnmount() {console.log('TextB WillUnmount');}
    handleChange(evt){
        this.setState({
            text: evt.target.value
        });
        //this.value=evt.target.value;
    }
    shouldComponentUpdate (newprops, newState) {
        return true;
    }
    render () { return <input type="text" onChange={this.handleChange} value={this.state.text}></input> } // defaultValue
}
// TextBox.defaultProps = {
//     value: "default"
// }

class ClickableButton extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    componentWillMount() {console.log('ClickableB WillMount');}
    componentDidMount() {console.log('ClickableB DidMount');}
    componentWillReceiveProps() {console.log('ClickableB WillReceiveProps');}
    // componentShouldUpdate() {console.log('ClickableB ShouldUpdate');return true;}
    componentWillUpdate() {console.log('ClickableB WillUpdate');}
    componentDidUpdate() {console.log('ClickableB DidUpdate');}
    shouldComponentUpdate (newprops, newState) {
        return true;
    }
    componentWillUnmount() {console.log('clickable B WillUnmount');}
    onButtonClick () {
        // this.prop.value = "Changed";
        console.log(this.props.text + "Button clicked");
    }
    render () { return <input type="button" value={this.props.text} onClick={this.onButtonClick}></input> } //this.props.MyText
}

class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.MyText = this.props.MyText || "Some value from constructor";
    }
    componentWillMount() {console.log('BaseC WillMount');}
    componentDidMount() {console.log('BaseC DidMount');}
    componentWillReceiveProps() {console.log('BaseC WillReceiveProps');}
    // componentShouldUpdate() {console.log('BaseC ShouldUpdate');return true;}
    componentWillUpdate() {console.log('BaseC WillUpdate');}
    componentDidUpdate() {console.log('BaseC DidUpdate');}
    shouldComponentUpdate (newprops, newState) {
        return true;
    }
    componentWillUnmount() {console.log('BaseC WillUnmount');}
    render () { return <div><ClickableButton text={this.MyText + '-1'}> </ClickableButton> <ClickableButton text={this.MyText + '-2'}> </ClickableButton> <TextBox></TextBox> </div> }
}

BaseComponent.defaultProps = {   
    MyText: "def supplied"
}

export default BaseComponent