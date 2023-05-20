import React from 'react'
import Mainlockup from '../components/Mainlockup'
import styled from 'styled-components';
import Form from '../components/Form';

const Hero = () => {
  return (
      <Heros>
        <Mainlockup></Mainlockup>
        <Form />
      </Heros>

  )
}
 
const Heros=styled.div`
  background-color: aliceblue;
  background-image: url("/Back Ground.png");
  display: flex;
  padding: 70px 140px;
  justify-content: space-between;
  
  @media all and (max-width:820px){
     display: block;
  }
`

export default Hero
