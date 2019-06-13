import React from "react";
import { categoryItem, CategoryList } from "./CategoryList";

class CategoryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "main"
    };
  }

  render() {
    return (
      <div>
        <CategoryList list={categoryItem["main"]} />
      </div>
    );
  }
}
export default CategoryItems;
