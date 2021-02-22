import React from "react";
import { Alert } from "react-bootstrap";

export function AlertPseudo(props) {
      if (props.showAlert) {
      return (
        <Alert variant="danger" onClose={() => props.setShowAlert(false)} dismissible>
          <Alert.Heading>Erreur !!</Alert.Heading>
          <p>
            Vous ne pouvez pas choisir ce pseudo !
          </p>
        </Alert>
      );
    } else {
        return <p></p>
    }
  }