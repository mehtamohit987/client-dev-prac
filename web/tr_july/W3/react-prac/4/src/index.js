import React from "react"
import ReactDOM from "react-dom"
// import {Page} from "./3/src/app" //"3/src/app"
// import About from "./2/src/app" //"2/src/app"
// import Topics from "./1/src/app" //"1/src/app"
import {Header, About, Topic} from './app'

import {BrowserRouter, Route, Link } from 'react-router-dom'


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component="Header">Header</Route>
            <Route path="/about" component="About">About</Route>
            <Route path="/topic" component="Topic">Topic</Route>
        </div>
    </BrowserRouter>
), document.getElementById('container')); ``