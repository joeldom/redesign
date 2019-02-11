import React, { Component } from "react";
import WordsList from "../../data/quotes.json";

class Words extends Component {
  render() {
    return (
      <>
        <ul>
          {WordsList.map((wordItem, index) => {
            return (
              <li className="quote">
                <div className="num">Design Quotes No.{wordItem.num}</div>
                {wordItem.quote}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default Words;
