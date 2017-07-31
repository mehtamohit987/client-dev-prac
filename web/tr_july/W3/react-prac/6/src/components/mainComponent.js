import React from "react"
import {BrowserRouter} from 'react-router-dom'

import HeaderComponent from "./headerComponent";
import NavComponent from "./navComponent";
import MainBodyComponent from "./mainBodyComponent";
import FooterComponent from "./footerComponent";

class MainComponent extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="main"><HeaderComponent/><NavComponent/><MainBodyComponent/><FooterComponent/></div>
            </BrowserRouter>
        );

    }
}

export default MainComponent;