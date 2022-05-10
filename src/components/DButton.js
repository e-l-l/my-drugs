import React from "react";
import "./DButton.css";
const Button = ({ as, children, filled, secondary, ...rest }) => {
  const that = {
    as,
  };
  return (
    <that.as
      className={`dir-control ${secondary ? "dir-control--secondary" : ""} ${
        filled ? "dir-control--filled" : ""
      }`}
      {...rest}
    >
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </that.as>
  );
};
Button.defaultProps = {
  as: "button",
};

const DButton = (props) => (
  <React.Fragment>
    <Button as="a" href={props.href} filled>
      {props.title}
    </Button>
  </React.Fragment>
);
export default DButton;
