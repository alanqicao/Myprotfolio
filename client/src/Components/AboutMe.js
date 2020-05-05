import React from 'react'
import { Segment, Image, Container } from 'semantic-ui-react'

const src = '/images/wireframe/image-text.png'

const AboutMe =()=>{
  return (
    <Container text style={{ marginTop: '7em' }}>
    <Segment>
    <Image src={src} size='small' floated='left' />
    <p>
    I’ve always loved to build things. Still do. To me, building violins and
  building software are the same — I get the chance to mold a block of wood
  or a line of code from the ground up into something intricate and
  beautiful. When it comes to debugging code or restoring violins, using
  creative ways to solve problems and thinking outside the box is key. I’ve
  always been interested in computer science and I’m finally taking the leap
  into this great wide world of coding.
    </p>
    <Image src={src} size='small' floated='right' />
    {/* <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
      definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
      phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
      facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
      porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
      everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
      per, quas minimum postulant per id.
    </p> */}
  </Segment>
  </Container>
  )
}

export default AboutMe
