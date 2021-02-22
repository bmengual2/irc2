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
          <p>
            Choissisez un pseudo avant de pouvoir continuer sur le site !
          </p>
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
