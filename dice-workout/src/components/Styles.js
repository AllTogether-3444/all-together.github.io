import styled from 'styled-components';

// background 
import background from './../asserts/bg.png';

// React router 
import {Link} from 'react-router-dom'

export const colors ={
    primary:"#3e0000",
    theme: "#c2b381",
    light1: "#F3F4F6",
    Light2: "#E5E7EB",
    dark1: "1F2937",
    dark2: "4B5563",
    dark3: "9CA3AF",
    red: "#DC2626"
}

// Styled components
export const StyledContainer = styled.div`
   margin: o;
   min-height: 100vh:
   display: flex:
   justify-content: center:
   align-intem: center;
   background: linear-gradients(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
   background-size: cover:
   background-attachment: fixed;
   `;


// Home 
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px; 
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px; 
`;

export const StyledSubTitle = syled.p`
    font-size: ${(props) => props.size}px; 
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px; 
`;

export const Avatar = syled.div`
  width: 85px:
  height: 85px:
  border-radius: 50px;
  background-image: url(${props => props.image});
  background-size: cover:
  background-attachment: fixed;
  margin: auto; 
`;

export const StyledButtom = styled(Link)`
   padding: 10px;
   wdth: 150px: 
   background-color: transparents;
   font-size: 16px:
   borde: 3px solid ${colers.primary};
   border-radius: 25px;
   color: ${colors.primary};
   text-decoration: none;
   text-align: center;
   transition: eas-in-out 0.3s;


   &:hover{
       background-color : ${colors.primary};
       color: ${colors.theme};
       cursor: pointer;
   }
`;
export const Button = styled.div`
   display: flex;
   justify-conent: space-around;
   flex-direction: row;
   margin-tp: 25px; 
`;

// Input 
export const StyledTextInput = styled.input`
    wdth: 280px: 
    padding: 15px;
    padding-l=eft: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${coloer.light2};
    border: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(propd) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

     &:focus {
        background-colors : ${colors.dark2};
        coloer: ${colors.primary};
     }
`;

export const StyledLabe1 = styled.p`
    text-align: left:
    font-size: 13px;
    font-weight: bold;
`;
export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px; 
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    wdth: 150px: 
    background-color: transparents;
    font-size: 16px:
    borde: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: eas-in-out 0.3s;


    &:hover{
        background-color : ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    }
`;