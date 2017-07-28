import React from "react";

const ListItem = (props) => <li className="list-item">{props.item}</li>;

const List = ({ items }) => (
    <ul className="list">
        {items.map(item => <ListItem key={item.toString()} item={item}/>)}
    </ul>
);

const Body = (props) => {
    let items = props.rawItems;
    return (
        <div>
            <h1>{props.header}</h1>
            <List items={items} />
        </div>
    ); 
};

const Page = function (props, context) {
    return (
        <div>
        <Body header="My List" rawItems={props.rawItems} /> 
        </div>
    );
} 

Page.defaultProps = {
    rawItems: ["alpha", "beta"]
};

export {Page}
