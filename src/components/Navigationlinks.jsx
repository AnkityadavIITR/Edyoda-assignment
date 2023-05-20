import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';


const Navigationlinks = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <Log >Log in</Log>
      </NavLink>
      <NavLink to={"/"}>
        <Sign>JOIN NOW</Sign>
      </NavLink>
    </div>
  )
}

const Log=styled.button`
  border-style: none;
  background-color: white;
  width: 46px;
   gap: 10px;
  text-align: center;

font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 16px;
`
const Sign=styled.button`
  justify-content: center;
  align-items: center;
   padding: 10px 42px;

  width: 166px;
  height: 40px;

background: linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%);
border-radius: 52px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: white;
border-style: none;

`
export default Navigationlinks
