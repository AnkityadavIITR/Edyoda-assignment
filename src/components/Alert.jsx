import React from 'react'
import { styled } from 'styled-components'


const Alert = ({price}) => {
  return (
    <Alertbox>
      <Offer>
        <p>Limited time offer</p>
        <span>-₹{18500-price}</span>
      </Offer>
      <Valid>
        <img src={'Icons/Vector (3).svg'} width="20px" alt="" />
        <p>Offer valid till 25th March 2023 </p>
      </Valid>
    </Alertbox>
  )
}
const Alertbox=styled.div`
    width: auto;
    height: auto;
    padding: 12px 18px;

    
    border: 2px solid red;
    border-radius: 8px;
    justify-content: space-between;
    background: linear-gradient(135deg, rgba(222, 67, 19, 0.2) 0%, rgba(222, 67, 19, 0.2) 0.75%,
     rgba(222, 67, 19, 0.2) 2.92%, rgba(222, 68, 20, 0.2) 6.37%, rgba(223, 69, 21, 0.2) 10.97%,
      rgba(223, 72, 22, 0.2) 16.59%, rgba(224, 75, 24, 0.2) 23.1%, rgba(225, 80, 27, 0.2) 30.37%,
       rgba(227, 86, 31, 0.2) 38.27%, rgba(229, 94, 36, 0.2) 46.66%, rgba(231, 104, 43, 0.2) 55.41%,
        rgba(235, 117, 51, 0.2) 64.39%, rgba(238, 132, 60, 0.2) 73.47%, rgba(243, 149, 71, 0.2) 82.52%,
        rgba(248, 169, 84, 0.2) 91.41%, rgba(254, 193, 99, 0.2) 100%);


`
const Offer=styled.div`
    display: flex;
    flex-direction: row;
    height: 24px;
    justify-content: space-between;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        color: #DE4313;
    }
    span{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
    }
    
`
const Valid=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    img{
        color: #DE4313;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 120%;
        color: #DE4313;
    }

`
export default Alert
