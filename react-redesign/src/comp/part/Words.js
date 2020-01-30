import React, { Component } from "react";
import WordsList from "../../data/quotes.json";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Words extends Component {
  render() {
    return (
      <>
        {WordsList.map((wordItem, index) => {
          return (
            <Col sm="6">
              <Card>
                <CardBody>
                  <CardTitle>Design Quotes No.{wordItem.num}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>{wordItem.quote}</CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </>
    );
  }
}
export default Words;
