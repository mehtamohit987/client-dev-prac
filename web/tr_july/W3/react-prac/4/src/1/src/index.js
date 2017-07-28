import React from "react"
import ReactDOM from "react-dom"
import MyButton from "./app.js"
ReactDOM.render( <div> HI <div><MyButton MyText="my-text-1"></MyButton><MyButton MyText="my-text-2"></MyButton></div></div>, document.getElementById('container'));
// setTimeout(()=>ReactDOM.unmountComponentAtNode(document.getElementById('container')), 3000)
