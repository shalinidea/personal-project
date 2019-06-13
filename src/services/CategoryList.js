import React from "react";

const CategoryList = props => (
  <ul>
    {props.list.map(item => (
      <li key={item.title}>
        <a href="#">
          <img src={item.image} alt="" />
        </a>
      </li>
    ))}
  </ul>
);
export { CategoryList };
