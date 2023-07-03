import React from "react";

import "./Size.scss";

function Size() {
  return (
    <div className="size-selector__pane">
      <div className="size-selector__option selected">
        <span className="size-selector__title">XS</span>
      </div>
      <div className="size-selector__option">
        <span className="size-selector__title">S</span>
      </div>
      <div className="size-selector__option">
        <span className="size-selector__title">M</span>
      </div>
      <div className="size-selector__option">
        <span className="size-selector__title">L</span>
      </div>
      <div className="size-selector__option">
        <span className="size-selector__title">XL</span>
      </div>
    </div>
  );
}

export default Size;
