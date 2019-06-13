import React from "react";
const list = [
  { title: "Landscapes", image: "category/forest1.jpeg" },
  { title: "Buildings", image: "category/lake1.jpeg" },
  { title: "Prtraits", image: "category/cat1.jpeg" },
  { title: "Collaborations", image: "category/cat1.jpeg" },
  { title: "Interests", image: "category/forest1.jpeg" },
  { title: "Exhibitions", image: "category/forest1.jpeg" }
];

const CategoryItem = () => (
  <ul>
    {list.map(item => (
      <li key={item.title}>
        <a href="#">
          <img src={item.image} alt="" />
        </a>
      </li>
    ))}
  </ul>
);
export default CategoryItem;
