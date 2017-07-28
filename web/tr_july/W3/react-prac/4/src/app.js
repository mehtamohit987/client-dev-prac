import React from "react"

class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>home</h2>
            </div>
        )
    }
}


const Topic = ({ match }) => (
    <div>
        <h2>Topic</h2>
        <Link to={`${match.url}/exampleTopicId`}>
            Example topic
        </Link>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
    </div>
);


class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}
export {Header,Topic,About};