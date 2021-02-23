import React from "react";
import { Alert } from "react-bootstrap";

export function Alert2(props) {
      if (props.showAlert) {
      return (
        <Alert variant={props.variant} onClose={() => props.setShowAlert(false)} dismissible>
          <p>
            {props.text}
          </p>
        </Alert>
      );
    } else {
        return <p></p>
    }
  }