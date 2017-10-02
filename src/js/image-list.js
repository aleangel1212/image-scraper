import React from "react";

import ImageItem from "./image-item";

export default function ImageList(props) {
  const renderedImages = props.urls.map((url, i) => (
    <div key={i} className="column is-4">
      <ImageItem url={url} />
    </div>
  ));

  function renderImageRow(rowNum) {
    return (
      <div key={rowNum} className="columns">
        {[renderedImages.pop(), renderedImages.pop(), renderedImages.pop()]}
      </div>
    );
  }

  function renderImageRows() {
    const imageRows = [];
    for (let i = 0; i < Math.ceil(props.urls.length / 3); i++) {
      imageRows.push(renderImageRow(i));
    }
    return imageRows;
  }

  return <div>{renderImageRows()}</div>;
}
