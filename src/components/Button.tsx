import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";
 

type ButtonPropsType = {
    bgcolor?: string
    color?: string
    secondBtn?: boolean
    thirdBtn?: boolean
    paddingleft?: string
    marg?:string
    displayBlock?:string
    
}


 export const Button = styled.button<ButtonPropsType>`
    background-color:${props => props.bgcolor  || theme.colors.titleText }; 
    border-radius:50px;
    color:${props =>props.color || theme.colors.primasyBtnText};
    width:170px;
    height: 55px;
    font-size:20px;
    /* padding-left:${props => props.paddingleft}; */
    margin:${props => props.marg};
    display:${props => props.displayBlock};

    
    &:hover {
        background-color:${theme.colors.btnBgHover};
        transition:${theme.animations.transition};
        cursor:pointer;
    } 

    @media ${theme.media.mobile} ,${theme.media.tablet} {
    width:100px;
    height: 30px;
    font-size:15px;
    margin-top:15px;

    }

 /* secondBtn */


     ${props => props.secondBtn && css<ButtonPropsType>`
        
    background-color:${props => props.bgcolor  || theme.colors.btnBg };
    border-radius:50px;
    color:${props =>props.color || theme.colors.titleText};
    width:150px;
    height: 55px;
     
    
    
    
    &:hover {
        background-color:${theme.colors.primasyBtnText};
        color:${theme.colors.btnBg};
        transition:${theme.animations.transition};

         
    }
    `}  
    

//   thirdBtn //  

     ${props => props.thirdBtn && css<ButtonPropsType>`
        
    background-color:${props => props.bgcolor  || theme.colors.titleText }; 
    border-radius:50px;
    color:${props =>props.color || theme.colors.primasyBtnText};
    width:215px;
    height: 55px;
    font-size:20px;
    /* padding-left:${props => props.paddingleft}; */
    margin:${props => props.marg};
    display:${props => props.displayBlock};

    
     `}


`





// как задавать разные цвета кнопке ????