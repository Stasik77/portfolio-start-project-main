import React from "react";
import { styled } from "styled-components";

 


export const Menu = (props:{ menuItems: Array<string>}) => {
    return (
  
      <StyledMenu>
                <ul >


                    {props.menuItems.map((item :string, index:number)=>{
                        return <li key ={index}>
                            < a href="">{item}</a>
                        </li>
                    })}
                </ul>
            </StyledMenu>
  
    )
};

const StyledMenu = styled.nav`
    ul {
        display:flex;
        gap:40px;
        justify-content:center;
        padding-bottom: 95px;
        font-size: 18px;
        
        
    }

     a {
        text-transform:none;
         font-style: 18px;
        color:black;
        font-weight: 500;
 
    }

`