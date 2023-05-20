import React from 'react'
import styled from "styled-components"

const Mainlockup = () => {
  return (
    <>
      <Content>
        <h2>Access curated courses worth ₹ <Span1>18,500</Span1>  at just <Span2>₹ 99</Span2> per year!</h2>
        <List>
           <img src={'./Icons/Book.png'} alt="img" />
           <p><Span2>100+</Span2> Job relevant courses </p>
        </List>
        <List>
           <img src={'./Icons/Clock.png'} alt="img" />
           <p><Span2>20,000+</Span2> Hours of content </p>
        </List>
        <List>
           <img src={'./Icons/Icon.png'} alt="img" />
           <p><Span2>Exclusive</Span2> webinar access </p>
        </List>
        <List>
           <img src={'./Icons/Degree.png'} alt="Img" />
           <p>Scholarship worth <Span2>₹94,500</Span2> </p>
        </List>
        <List>
           <img src={'./Icons/Adds.png'} alt="Img" />
           <p><Span2>Ad Free </Span2>learning experience </p>
        </List>
      </Content>
    </>
  )
}
const Content = styled.div`
  max-width: 50%;
  padding: 0px;

    h2{
      letter-spacing: -0.01em;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      font-size: 44px;
      line-height: 125%;
      color: white;
      padding-bottom: 50px;
    }

    @media all and (max-width:820px){
      max-width: 80%;
  }
    
    
`
const Span1=styled.span`
  text-decoration: line-through;
  text-decoration-color: red;
`
const Span2=styled.span`
  color: #0096FF;
`
const List=styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: white;
  gap: 45px;
  margin-bottom:50px;

  img{
    width: 40px;
  }
`
export default Mainlockup;
