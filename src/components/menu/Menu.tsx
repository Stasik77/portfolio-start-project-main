import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../Button";
 

export type StatusType = "all" | "ux" |"web"|"front"



type MunePropsType = {
    menuItems: Array<{status:StatusType ,title: string}>
    changeFilterStatus: (value:StatusType) => void
}

export const Menu = (props:MunePropsType) => {
    return (

        <StyledMenu>
            <ul >


                {props.menuItems.map((item:{status:StatusType ,title:string} , index: number) => {
                    return <li key={index}>
                        <Link as={"button"} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </li>
                })}
            </ul>
        </StyledMenu>

    );
};

  const Link = styled.a`

        text-transform:none;
        font-size:18px;
        color:black;
        font-weight: 700;

       

     &:hover {
        color:${theme.colors.titleText};
        
        transition:0.3s;
         
    }

`       
const StyledMenu = styled.nav`
    ul {
        display:flex;
        gap:40px;
        justify-content:center;
        padding-bottom: 95px;
        font-size: 18px;
        
        
    }
    

    

`

// сделать по клоику несколько работ одного типа . шрифт ссылок