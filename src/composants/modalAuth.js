import React from "react";
import { Modal, Button, Form } from "react-bootstrap";



export function ModalAuth(props) {
    return (
      <Modal
        {...props}  
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
        className="bg-dark"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Authentification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.showAlertPseudo ? <p>Vous ne pouvez pas utiliser ce pseudo !</p> : <p>Choissisez votre pseudo</p>}
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Pseudo</Form.Label>
    <Form.Control type="input" onChange={(e) => props.onChangePseudo(e.target.value)} />
    <Form.Text className="text-muted">
      Choisis un pseudo bienveillant stp
    </Form.Text>
  </Form.Group>
  </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button
                  id="buttonGo"
                  variant="dark"
                  disabled={(props.pseudo === undefined || props.pseudo === "")}
                  onClick={() => {
                    props.validatePseudo();
                  }}
                >
                  Valider
                </Button>
        </Modal.Footer>
      </Modal>
    );
  }
