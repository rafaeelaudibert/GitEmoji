import React from 'react';
import { Hero, Input, Container, Title } from 'rbx';

const GitEmojiHero = ({inputValue, handleInputChange}) => {  
    return (
      <Hero color="primary" className="is-bold is-medium has-margin-bottom-lg">
        <Hero.Body>
          <Container>
            <Title>Github Emojis</Title>
            <Title subtitle> You can search for them in the box below  </Title>
            <small> You can click in the buttons to copy their tag to your clipboard </small>
            <Input placeholder="Search any emoji" type="text" value={inputValue} onChange={handleInputChange}></Input>
          </Container>
        </Hero.Body>
        <Hero.Foot align="end" className="has-padding-right-lg">
          This is not affiliated, endorsed or related to Github in any way.
        </Hero.Foot>
      </Hero>
    )

}

export default GitEmojiHero