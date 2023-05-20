import React, { useState } from 'react'
import { styled } from 'styled-components'
import Checkbox from './Checkbox'
import Alert from './Alert'

const Form = () => {
    const months = [12, 6, 3];
    const price = [179, 149, 99];
    const [selection, setSelection] = useState(0);

    return (
        <FormWrapper>
            <Header>
                <Box>
                    <button>1</button>
                    <p>Sign-up</p>
                </Box>
                <Box>
                    <button>2</button>
                    <p>Subscribe</p>
                </Box>
            </Header>
            <h3>Select your subcription plan</h3>

            {/* to create disable checkbox */}
            <Checkbox months={12} prefer={0} price={99}>
                Hey
                <Disabled/>
            </Checkbox>

            {/* to map through active checkbox */}

            {
                months.map((item, index) => {
                    return <Checkbox months={item} price={price[index]} index={index} ticked={selection === index ? true : false} setSelection={setSelection}/>
                })
            }

            <Subscription>
                <Subscribe>
                    <p>Subscription Fees</p>
                    <span>₹18,500</span>
                </Subscribe>

                <Alert price={price[selection]}/>
                <Foot>
                    <p>Total (Incl. of 18% GST)</p>
                    <span>{price[selection]}</span>
                </Foot>
            </Subscription>

            <ButtonContainer>
                <Cancel> CANCEL </Cancel>
                <Pay>PROCEED TO PAY</Pay>
            </ButtonContainer>

            <Gateway>
                <img src={'Icons/Razorpay Icon.png'} alt="" />
            </Gateway>

        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
    gap: 15px;
    max-width: 40%;
    height: 760px;
    font-family: 'Inter', sans-serif;
    font-family: 'Roboto', sans-serif;
    background: #FFFFFF;
    border-radius: 8px;
    position: relative;
    h3{
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        align-self: stretch;  
    }

    @media all and (max-width:820px){
      max-width: 60%;
  }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
`

const Box = styled.div`
    padding: 0px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        width: 38px;
        height: 38px;
        background: #0096FF;
        border-style: none;
        border-radius: 100px;
        color: white;
    }
`


const Subscription = styled.div`
    width: 105%;
    height:auto;
    border-top: 2px solid grey ;
`
const Subscribe = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    p{   
     font-family: 'Roboto';
     font-style: normal;
     font-weight: 400;
     font-size: 13px;
     line-height: 120%;
     color :#3C4852 ;
    }

    span{
        font-weight: 500;
        font-size: 14px;
    }
`

const Foot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 18px;
    p{
        font-weight: 600;
        font-size: 13px;
        line-height: 120%;
        color: #3C4852;
    }

    span{
        font-weight: 600;
        font-size: 20px;
        line-height: 100%;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
    margin-top: 22px;
 


`
const Cancel = styled.button`
    align-items: center;
    padding: 10px 42px;
    gap: 10px;
    max-width: 50%;
    max-height: 56px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #F77171;
    background-color: white;
    border: 2px solid #F77171;
    border-radius: 4px;
`
const Pay = styled.button`
    align-items: center;
    padding: 10px 42px;
    gap: 10px;
    max-width: 50%;
    max-height: 56px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: white;
    background: #47BA68;
    border-radius: 4px;
    border-style:none;

`
const Gateway = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
`

const Disabled=styled.div`
    width: 100%;
    height: 100%;
    background-color:#BEBEBE;
    opacity: 0.5;
    border-radius: 4px solid grey;
    z-index: 20;

`

export default Form
