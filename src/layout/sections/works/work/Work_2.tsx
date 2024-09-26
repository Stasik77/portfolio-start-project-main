import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";


type Work_2PropsType = {
    [x: string]: string | undefined;
     
}
export const Work_2:React.FC<Work_2PropsType> =(props:Work_2PropsType) =>{
    return (
        <ImageWork_2 src={props.src}/>
        



         
    )
}

const ImageWork_2 = styled.img`
    width:545px;
    height:350px;
    /* max-width:100%; */
    /* object-fit:none; */
    border-radius:35px;

    &:hover {
        transform:rotate(0.5deg) ;
    }

    @media ${theme.media.tablet}{
        width:345px;
        height:270px;
        padding-top:25px;
        padding:0;
        max-width:100vw;
       border:2px solid red;
    }

`

// почему  одна картинка меняется ? 