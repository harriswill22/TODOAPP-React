import React from 'react';

const List = (props) => {
return (<ul>
        {props.items.map(item => {
        return <li key={item.id} 
        className="single-todo" 
        // onClick ={props.handleClick.bind(null,index)}
        onClick={() => {
        console.log(`clicked ${item}`);
        props.handleClick(item.id);
        }} 
        > {item.name} </li>;
        })}
        </ul>
);
};


export default List; 