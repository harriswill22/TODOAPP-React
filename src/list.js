import React from "react";

const List = props => {
  return (
    <ul>
      {props.items.map(item => {
        console.log(item);
        return (
          <li 
            key={item.id} 
            className="single-todo"
            onClick={() => props.handleClick(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;