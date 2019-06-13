import React from "react";

const categoryItem = {
  main: [
    { mapTo: "Landscape", title: "Landscapes", image: "category/forest1.jpeg" },
    { mapTo: "Buildings", title: "Buildings", image: "category/lake1.jpeg" }
  ],
  Landscape: [
    { title: "forest", image: "category/forest1.jpeg" },
    { title: "lake", image: "category/lake1.jpeg" }
  ]
};

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
export { categoryItem, CategoryList };
