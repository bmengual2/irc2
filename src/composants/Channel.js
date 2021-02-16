import React from "react";
import { Component } from "react";
import { ListGroup } from "react-bootstrap";



class ChannelShow extends Component {
    constructor() {
        super();
        this.state = { messages: [{pseudo: "pseudo1", message: "message1"}, {pseudo: "pseudo2", message:"message2" }] };
      }
    render() {
        const listMessages = this.props.messageChannel.map((message) => (
            <ListGroup.Item variant="dark" style={{
                textDecoration: "none",
              }}>
                  {message.pseudo} : {message.message}
            </ListGroup.Item>
          ));
        return(
<>
<ListGroup>
            {listMessages}
            </ListGroup>
  </>
        )
}
}
export default ChannelShow