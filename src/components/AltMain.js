import React from "react";
import { url } from "inspector";

function AltMain() {
  const divStyle = {
    backgroundImage: `url(../cat1.jpeg)`
  };
  return (
    <div className="mainWrapper">
      <div className="mainCategoryItemsWrapper">
        <div className="mainCategoryItemWrapper">
          <div className="mainCategoryBackgroundImage" style={divStyle} />
        </div>
      </div>
    </div>
  );
}
export default AltMain;
