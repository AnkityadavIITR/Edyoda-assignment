import React, { useState } from 'react';
import styled from 'styled-components';
// import downArrow from "../../public/Icons/Vector.svg";



const DropdownWrapper = styled.div`
  /* position: absolute; */
  left:178px ;
  top:7px;
  /* display: inline-block; */
`;

const DropdownButton = styled.button`
  width: auto;
  height: 19px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;


  text-align: center;

  color: #000000; 
  background-color: white;
  cursor: pointer;
  border: none;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  top: 100%;
  padding: 10px;
  width: auto;
  
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropdownMenu = ({ courses,heading }) => {


  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => setShowDropdown(!showDropdown);

  const handleItemClick = (option) => {
    console.log(`Selected option: ${option}`);
    setShowDropdown(false);
  };
  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleDropdownClick}>{heading} <img src={'./Icons/Vector.svg'} /></DropdownButton>
      <DropdownContent show={showDropdown}>
        {courses.map((option,index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(option)}>{option}</DropdownItem>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default DropdownMenu;


