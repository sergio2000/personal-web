import {Card, Button} from "react-bootstrap";
import React from "react";
function CardData(props) {
    return(
        <Card border="primary" style={{ width: '16rem', flex: 1 }}className="text">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.project}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button href={props.link} variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    );

}
export default CardData;