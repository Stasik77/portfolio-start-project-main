import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import ilipsImgR from "../../../assets/images/EllipseR.svg"
import ilipsImgL from "../../../assets/images/EllipseL.svg"; 



export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (

        <StyledHeaderMenu>
            <ul >


                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href="#"> 
                        {item}
                        <Mask>
                        <span>{item}</span>
                        </Mask>
                        <Mask>
                        <span>{item}</span>
                        </Mask>
                        
                        </Link>
                    </ListItem>
                })}
            </ul>
            <ElipsR src={ilipsImgR}/>
            <ElipsL src={ilipsImgL}/>
        </StyledHeaderMenu>

    )
};

const StyledHeaderMenu = styled.nav`
    ul {
        display:flex;
        gap:30px;
        justify-content:center;
        position: relative;
    }

`

const ElipsR = styled.img`
    position:absolute;
    right:0;
    top:0;

`
const ElipsL = styled.img`
    position:absolute;
    left:0;
    top:0;
    margin-top: 160px;


`
 

const Link = styled.a`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color:transparent; 
`

const Mask = styled.span`
position:absolute;
top:0;
left:0;
display:inline-block;
height:50%;
overflow-y:hidden;
/* outline: 1px solid red; */
color: ${theme.colors.primaryText};

& + & {
    top:50%;
    span {
        display:inline-block;
        transform: translateY(-50%);

    }
}

    
`
const ListItem = styled.li`
position:relative;

&::before {
    content:"";
    display:inline-block;
    height:3px;
    background-color:black;
    position:absolute;
    top:50%;
    left:-10px;
    right:-10px;
    z-index:1;
    transform:scale(0)
}

&:hover {
    &::before {
        transform:scale(1);
    }
    ${Mask} {
        
    transform:skewX(10deg) ;
    color:${theme.colors.font}
  
    

     ${Mask} + ${Mask} {
        transform:skewX(10deg) ;
 
    } 
    
}
}

`