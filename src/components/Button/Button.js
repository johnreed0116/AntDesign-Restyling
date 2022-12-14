import React from "react";
import { Button, theme } from "antd";

const { useToken } = theme;

const CButton = (props) => {
  const { token } = useToken();
  token.colorPrimary = "#6eade3";
  token.colorText = "#ffffff";
  return (
    <Button
      style={{
        backgroundColor: token.colorPrimary,
        width: "150px",
        height: "70px",
        color: "white",
      }}
    >
      {props.text}
    </Button>
  );
};

export default CButton;
