import React from "react"
import Card from 'react-bootstrap/Card';
import profile from './profile.png'
function GitHubCard() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={profile} />
        <Card.Body>
          <Card.Text>
            <h1>Username</h1>
               Tyler-Will
            <h1>About Me</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, est sit, dolorum recusandae quod laudantium minima impedit nesciunt expedita quasi iure error autem eum cumque ullam quis fugit, perspiciatis officia.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default GitHubCard;