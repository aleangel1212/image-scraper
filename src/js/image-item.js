import React, { Component } from "react";

class ImageItem extends Component {
  render() {
    return (
      <a href={this.props.url}>
        <div className="card">
          <div
            className="card-image"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "250px"
            }}
          >
            <img src={this.props.url} />
          </div>
        </div>
      </a>
    );
  }
}

export default ImageItem;
