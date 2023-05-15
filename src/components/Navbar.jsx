import React, { useState } from 'react'
import styles from '../styles.module.css';
import DropdownMenu from './DropdownMenu';
import styled from 'styled-components';


import Search from './Search';
const Navbar = () => {
    const courses=[
        "Programming Language",
        "Web Development",
       "Data Structure & Algorithm",
        "Operating System",
        "Interview Preparation",    
    ]

    const programs=["Bootcamp","Seminar"];

    

  return (
    <Navwrap>
      <Nav>
        <Navbox>
          <Logo>EDYODA</Logo>
          <DropdownMenu courses={courses} heading={'courses'}/>
          <DropdownMenu courses={programs} heading={'programs'}/>
        </Navbox>
        <Navbox>
           <Search></Search>
           <Log >Log in</Log>
           <Sign>JOIN NOW</Sign>
        </Navbox>

    </Nav>
    </Navwrap>
  )
}

const Navwrap=styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 80px 10px;
  z-index: 2;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  
 
`

const Nav=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

`

const Navbox=styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  input{
     width:50px;
  }
  .DropdownMenu{
    
  }
  
`
const Logo=styled.div` 
  width: 120px;
  height: 32px;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 45px;


  display: flex;
  align-items: center;
  text-align: center;
  background: linear-gradient(90.72deg, #0096FF 42.18%, #0048FF 93.77%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  
`

const Log=styled.button`
  border-style: none;
  background-color: white;
  width: 46px;
   
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

export default Navbar
