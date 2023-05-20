import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const Checkbox = ({ ticked, months, price, index, setSelection ,prefer}) => {
  console.log(ticked);
  const monthly = Math.ceil(price / months);

  return (
    <Checkbox1
      style={
        ticked
          ? { border: "2px solid #47BA68", backgroundColor: "#D7EDDD" }
          : { border: "2px solid #BEBEBE", backgroundColor: "white" }
          
      }
      onClick={() => setSelection(index)}>

      {prefer===0 && <Tag style={ prefer===0 ?{backgroundColor:" #F77171"}:{}}>"Offer Expired"</Tag>}

      {months === 12 && prefer!=0 && <Tag>"Recommended"</Tag>}


      <Box>
        {ticked ? (
          <img src={"/Icons/Check.png"} height="32px" alt="First image" />
        ) : (
          <img src="/Icons/Radio Button.png" alt="Second image" />
        )}

        <button>
          {months} months subscription
        </button>
        <P>
          Total <Span1>₹ {price}</Span1> <Span2>₹ {monthly} </Span2>/ mon{" "}
        </P>
      </Box>
    </Checkbox1>
  );
};

const Checkbox1 = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 10px;
  border-radius: 4px;
  cursor: pointer;

`;
const Tag = styled.div`
  background-color: #47ba68;
  color: white;
  border-radius: 0px 0px 4px 4px;
  border-style: none;
  padding: 2px 20px;
  font-size: 12px;
  font-weight: 500;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 50px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  gap: 7px;
  button {
    border-style: none;
    background:transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
  }
  
`;

const Input = styled.input`
  border: 2px solid grey;
  border-radius: 8px;
`;
const P = styled.p`
  max-width: 75px;
  max-height: 32px;
  font-size: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #3c4852;
  position: absolute;
  right: 10px;

  
`;
const Span1 = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;
const Span2 = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`;
export default Checkbox;
