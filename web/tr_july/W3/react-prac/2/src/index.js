import React from "react"
import ReactDOM from "react-dom"
import Data from "./app.js"
ReactDOM.render( <div> HI <Data></Data></div>, document.getElementById('container'));
// setTimeout(()=>ReactDOM.unmountComponentAtNode(document.getElementById('container')), 3000)
