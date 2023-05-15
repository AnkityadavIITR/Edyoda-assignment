import React, { useState } from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa'

const SearchContainer = styled.div`
 display: flex;
 align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 200px;
`;

const SearchButton = styled.button`
  
  background: none;
  border: none;
  cursor: pointer;
  scale: calc(1.1);
`;

const SearchInput = styled.input`
  width: 0;
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  background-color: ${({ isOpen }) => (isOpen ? '#fff' : 'transparent')};
  border: 1px solid ${({ isOpen }) => (isOpen ? '#ccc' : 'transparent')};
  height: ${({isOpen})=>(isOpen? '30px' :'0px')};
  margin-right: ${({isOpen})=>(isOpen? '10px' :'0px')};
  padding-left: ${({isOpen})=>(isOpen? '10px' :'0px')};
  
  border-radius: 20px;
  outline: none;
`;

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [input ,setInput]=useState('')

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchContainer>
      <SearchInput type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} isOpen={isOpen} style={{ width: isOpen ? '150px' : '0'}}  />
      <SearchButton onClick={toggleSearch}>
        <FaSearch></FaSearch>
      </SearchButton>
    </SearchContainer>
  );
}

export default Search;
