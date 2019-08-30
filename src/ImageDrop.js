import React, { Component } from "react";
import styled from "@emotion/styled";
//Based on https://www.bignerdranch.com/blog/dont-over-react-rendering-binary-data/

let urls = new WeakMap();

let blobUrl = blob => {
  if (urls.has(blob)) {
    return urls.get(blob);
  } else {
    let url = URL.createObjectURL(blob);
    urls.set(blob, url);
    return url;
  }
};

const Img = ({ src }) => <img src={src} />;

const Wrapper = styled.div({
    border: '1px solid black'
})

 export class ImageDrop extends Component {
  state = { file: null, counter: 0 };

  refresh = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  componentDidMount() {
    this.timer = setInterval(this.refresh, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onDrag = event => {
    event.preventDefault();
  };

  onDrop = event => {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    this.setState({ file });
  };

  render() {
    let { file } = this.state;
    let url = file && blobUrl(file);

    return (
      <Wrapper onDragOver={this.onDrag} onDrop={this.onDrop}>
        {file ? <Img src={url} /> : <p>Drop an image!</p>}
      </Wrapper>
    );
  }
}

