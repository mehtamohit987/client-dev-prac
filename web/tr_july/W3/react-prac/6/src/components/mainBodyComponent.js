import React from "react";
import HomeComponent from "./homeComponent";
import AboutComponent from "./aboutComponent";
import ContactComponent from "./contactComponent";

import {Route} from 'react-router-dom'

class MainBodyComponent extends React.Component {
    render() {
        return <div>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/about" component={AboutComponent}/>
        <Route path="/contact" component={ContactComponent}/>
        </div>;
    }
}
export default MainBodyComponent;