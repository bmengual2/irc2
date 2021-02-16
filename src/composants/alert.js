import React from "react";
import { Alert } from "react-bootstrap";

export function AlertChannel(props) {
      if (props.showAlert) {
      return (
        <Alert variant="danger" onClose={() => props.setShowAlert(false)} dismissible>
          <Alert.Heading>Erreur !!</Alert.Heading>
          <p>
            Ce channel n'existe pas !
          </p>
        </Alert>
      );
    } else {
        return <p></p>
    }
  }