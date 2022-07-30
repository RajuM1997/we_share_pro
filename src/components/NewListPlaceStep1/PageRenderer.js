import React, { Component } from "react";

class PageRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileds: {},
    };
  }
  handleFiledOnChange = (fieldId) => (event) => {
    this.setState(thisFileds, {
      ...thisFileds,
      [this.filedId]: [event.target.value],
    });
  };
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default PageRenderer;
