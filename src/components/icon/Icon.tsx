import React from "react";
import IconsSprite from './../../assets/images/icons-sprite.svg'
import { theme } from "../../styles/Theme";
import styled from 'styled-components'; 
 
 
 

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    mobileSize?: string 
    StyledIcon?: boolean
}

export const Icon:React.FC<IconPropsType> =(props:IconPropsType) => {
    return (

        
            <svg width= {props.width || "50"}  height= {props.height || "50"} viewBox={props.viewBox || "0 0 50 50" }  fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={ `${IconsSprite}#${props.iconId}`}/>
            </svg>
      
    );
    
};
  
 
export const StyledIcon = styled(Icon)`  
width: ${props => props.mobileSize}; 
height: ${props => props.mobileSize}; 
 
`



// type Props {
//     text: string
//     iconId: string
// }

// const ListItem = (props: Props) => {
//     return (
//         <li>
// <Icon iconId={props.iconId}/>
// <span>{props.text}</span>

//         </li>
//     )
// }  @media ${theme.media.mobile}, ${theme.media.tablet} {
         /* & ${viewBox={props}   */

         
       
       
        