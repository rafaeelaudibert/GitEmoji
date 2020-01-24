import React, { Fragment } from "react";
import {
  Button,
  Navbar,
  Container,
  Column,
  Box,
  Image,
  Hero,
  Input
} from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./App.scss";
import "./spacing.scss";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <Fragment>
      <Navbar color="danger" transparent>
        <Navbar.Brand>
          <Navbar.Item href="#">
            <Image alt="Logo" src={logo} role="presentation" />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
                <Button
                  color="warning"
                  as="a"
                  href="https://github.com/rafaeelaudibert/GitEmoji"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="has-margin-right-sm"
                  />
                  <strong>Github</strong>
                </Button>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Hero color="primary" className="is-bold is-medium has-margin-bottom-lg">
        <Hero.Body>
          <Container>
            <h1 class="title">Github Emojis</h1>
            <h2 class="subtitle">You can search for them in the box below</h2>
            <Input placeholder="Search any emoji" type="text"></Input>
          </Container>
        </Hero.Body>
        <Hero.Foot align="end" className="has-padding-right-lg">
          This is not affiliated, endorsed or related to Github in any way.
        </Hero.Foot>
      </Hero>
      <Container>
        <Column.Group>
          <Column size="one-half">
            <Box>
              <Image.Container size={128}>
                <Image
                  alt="Image"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </Image.Container>
            </Box>
          </Column>
          <Column>25%</Column>
          <Column>25%</Column>
        </Column.Group>
        <Column.Group>
          <Column size="one-half">
            <Box>
              <Image.Container size={128}>
                <Image
                  alt="Image"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </Image.Container>
            </Box>
          </Column>
          <Column>25%</Column>
          <Column>25%</Column>
        </Column.Group>
        <Column.Group>
          <Column size="one-half">
            <Box>
              <Image.Container size={128}>
                <Image
                  alt="Image"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </Image.Container>
            </Box>
          </Column>
          <Column>25%</Column>
          <Column>25%</Column>
        </Column.Group>
      </Container>
    </Fragment>
  );
};

export default App;

// For columns on different sizes
/*

is-three-quarters-mobile
is-two-thirds-tablet
is-half-desktop
is-one-third-widescreen
is-one-quarter-fullhd

*/
