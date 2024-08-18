import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";
 

type ButtonPropsType = {
    bgcolor?: string
    color?: string
    secondBtn?: boolean
}


 export const Button = styled.button<ButtonPropsType>`
    background-color:${props => props.bgcolor  || theme.colors.titleText }; 
    border-radius:50px;
    color:${props =>props.color || theme.colors.primasyBtnText};
    width:170px;
    height: 55px;;
    
    &:hover {
        background-color:${theme.colors.btnBg} ;
    } 


 /* secondBtn */


     ${props => props.secondBtn && css<ButtonPropsType>`
        
     background-color:${props => props.bgcolor  || theme.colors.btnBg };
    border-radius:50px;
    color:${props =>props.color || theme.colors.primasyBtnText};
    width:170px;
    height: 55px;
    
    
    &:hover {
        background-color:${theme.colors.font};
        color:${theme.colors.titleText}
    }


    `}  
    


  
   

 

`

// как задавать разные цвета кнопке ????