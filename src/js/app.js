import React, { Component } from "react";
import axios from "axios";
import ImageList from "./image-list";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      imgs: null,
      loading: false
    };
  }

  handleFormSubmit(e) {
    const url = `http://www.${this.refs.url.value}/`;

    e.preventDefault();
    this.setState({ loading: true });

    axios.post("/url", { url }).then(res => {
      const html = new DOMParser().parseFromString(res.data, "text/html").body;
      var imgs = html.getElementsByTagName("img");
      var imgSrcs = [];

      for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i].src);
      }

      imgSrcs = imgSrcs.map(x => {
        return x.replace(window.location.href, url);
      });

      this.setState({ imgs: imgSrcs, loading: false });
    });
  }

  render() {
    if (!this.state.imgs && !this.state.loading) {
      return (
        <section className="hero is-fullheight is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-4 is-offset-4">
                  <div className="box">
                    <form onSubmit={this.handleFormSubmit}>
                      <div className="field">
                        <label htmlFor="username" className="label">
                          Input URL
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            ref="url"
                            placeholder="ex: google.com"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (this.state.loading === true) {
      return (
        <div className="loader-container">
          <div className="loading-pulse" />
        </div>
      );
    }

    return (
      <section
        className="section"
        style={{
          backgroundImage:
            "linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)",
          height: "100vh",
          overflowY: "scroll"
        }}
      >
        <a
          className="button is-danger"
          style={{
            position: "absolute",
            left: "25px",
            top: "25px",
            fontSize: "20px",
            zIndex: 1
          }}
          onClick={() => {
            this.setState({ imgs: null });
          }}
        >
          X
        </a>
        <ImageList urls={this.state.imgs} />
      </section>
    );
  }
}

export default App;
