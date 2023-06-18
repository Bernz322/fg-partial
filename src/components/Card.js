import React from "react";

const Card = (props) => (
  <div
    className={`card ${
      props.className ? props.className : ""
    }`}
  >
    {" "}
    {props.children}{" "}
  </div>
);
Card.Header = (props) => (
  <div
    className={`card-header d-flex justify-content-between ${
      props.className ? props.className : ""
    }`}
  >
    {" "}
    {props.children}{" "}
  </div>
);
Card.Body = (props) => (
  <div
    className={`card-body ${
      props.className ? props.className : ""
    }`}
  >
    {" "}
    {props.children}{" "}
  </div>
);
Card.Footer = (props) => (
  <div className="card-footer">
    {" "}
    {props.children}{" "}
  </div>
);
// eslint-disable-next-line react/display-name
Card.Header.Title = (props) => (
  <div
    className={`header-title ${
      props.className ? props.className : ""
    }`}
  >
    {" "}
    {props.children}{" "}
  </div>
);
// eslint-disable-next-line react/display-name
Card.Header.Action = (props) => (
  <div
    className={`header-action ${
      props.className ? props.className : ""
    }`}
  >
    {" "}
    {props.children}{" "}
  </div>
);

Card.displayName = "Card";
Card.Header.displayName = "Card Header";
Card.Body.displayName = "Card Body";
Card.Footer.displayName = "Card Footer";
export default Card;
