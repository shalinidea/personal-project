import React from "react";

const CategoryList = props => (
  <div className="mainContentWrapper">
    {props.list.map(item => (
      <div className="mainContentItemsWrapper" key={item}>
        {/* <div className="mainCategory"onClick={() => {item.mapTo && props.mapToCategory(item.mapTo);}}> */}
        <div
          className="mainContentItemImageWrapper"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="mainContentItemSubtitleWrapper">
          <div className="mainContentItemSubtitleTextWrapper">{item.title}</div>
        </div>
      </div>
      // </div>
    ))}
  </div>
);
export { CategoryList };
