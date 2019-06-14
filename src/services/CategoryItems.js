import React from "react";
import { CategoryList } from "./CategoryList";
import { categoryItem } from "../data/ImageData";

class CategoryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "main"
    };
  }

  updateCurrentCategory = nextCategory => {
    this.setState({ currentCategory: nextCategory });
  };

  render() {
    return (
      <div>
        <CategoryList
          list={categoryItem[this.state.currentCategory]}
          mapToCategory={this.updateCurrentCategory}
        />
      </div>
    );
  }
}
export default CategoryItems;
