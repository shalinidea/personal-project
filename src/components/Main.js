import React from "react";
import { categoryItem, CategoryList } from "../services/CategoryItem";

function Main() {
  return (
    <div className="mainList">
      <CategoryList list={categoryItem["main"]} />
    </div>
  );
}
export default Main;
