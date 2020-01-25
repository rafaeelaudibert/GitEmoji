import React from "react";
import { Button, Navbar, Image } from "rbx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/logo.png";

const GitEmojiNavbar = () => {
  return (
    <Navbar transparent color="danger">
      <Navbar.Brand>
        <Navbar.Item href="#">
          <Image alt="Logo" src={logo} role="presentation" />
        </Navbar.Item>
        <Navbar.Burger name="Menu" />
      </Navbar.Brand>
      <Navbar.Menu backgroundColor="danger">
        <Navbar.Segment
          align="end"
          className="has-margin-right-md has-margin-left-sm"
        >
          <Button.Group>
            <Button
              color="warning"
              as="a"
              name="GitEmoji Repository"
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
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

export default GitEmojiNavbar;
