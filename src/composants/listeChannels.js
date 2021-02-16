import React from "react";
import { ListGroup } from "react-bootstrap";

export function ListeChannels(props) {
    const listeChannels = props.channels.map((channel) => (
        <ListGroup.Item variant="dark" style={{
            textDecoration: "none",
            cursor: "pointer",
          }} onClick={() => props.setCurrentChannel(channel)}>
            {channel}
        </ListGroup.Item>
      ));
    return(
        <ListGroup>
            {listeChannels}
        </ListGroup>

    )
}