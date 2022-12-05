import styled from 'styled-components';

export const StatWrapper=styled.div`
display:flex;
align-items: center;
flex-direction:column`

export const StatItem=styled.span`
:not(:last-child){margin-bottom:10px;}
font-size: 18px;
:last-child{font-size: 22px;
  font-weight: 600;}`