import React, { Component } from "react";
import WordsList from "../../data/words.json";

class Words extends Component {
  render() {
    return (
      <>
        <ul>
          {WordsList.map((wordItem, index) => {
            return <li>{wordItem.content}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default Words;
