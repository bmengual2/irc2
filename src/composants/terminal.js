import React from "react";
import { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";


class Terminal extends Component {
    render() {
        return(
<>
<Navbar className="bg-dark justify-content-between">
  <span style={{ color: "white"}}>
<PersonFill></PersonFill>
{" "}
{this.props.pseudo}
</span>
<Button variant="dark" onClick={() => this.props.deleteChan()}>Home</Button>
  <Form inline>
    <FormControl onChange={(e) => this.props.onChangeCommand(e.target.value)} type="text" placeholder="" className=" mr-sm-2" />
    <Button variant="dark" onClick={() => this.props.command()} id="buttonEnter">Run</Button>
  </Form>
</Navbar>
  </>
        )
}
}
export default Terminal