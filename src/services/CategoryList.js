import React from "react";
import { Link } from "react-router-dom";

const CategoryList = props => (
  <div className="mainContentWrapper">
    {props.list.map(item => (
      <div className="mainContentItemsWrapper" key={item}>
        <div
          className="mainContentItemImageWrapper"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="mainContentItemSubtitleWrapper">
          <Link to={`/${item.title}`} className="categoryTitleLink">
            <div className="mainContentItemSubtitleTextWrapper">
              {item.title}
            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
);
export { CategoryList };
