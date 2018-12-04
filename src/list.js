import React from 'react';

const List = (props) => {
return (<ul>
        {props.items.map((item, index) => {
        return <li key={index} 
        className="single-todo" 
        onClick ={props.handleClick.bind(null,index)}
        // onClick={() => {
        // console.log(`clicked ${index}`);
        // props.handleClick(index);
        // }} 
        > {item} </li>;
        })}
        </ul>
);
};


export default List; 