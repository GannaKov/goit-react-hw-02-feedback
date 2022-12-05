import styled from 'styled-components';

export const Wrapper=styled.div`
`
export const BtnList=styled.ul`display: flex;justify-content: center;`

export const Button=styled.button`
width:80px;
margin: 0 auto;
background-color:white;
border-radius:10%;
  
&:focus,
&:hover {
  background-color: lightgreen;
  outline: transparent;
}`
export const BtnItem=styled.li`
:not(:last-child){margin-right:20px}`