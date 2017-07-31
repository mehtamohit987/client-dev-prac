import React from "react"

class FormComponent extends React.Component {
    render () {
        return <form></form>
    }
}
class ContactComponent extends React.Component {
    render () {
        return <FormComponent></FormComponent>;
    }
}
export default ContactComponent;
