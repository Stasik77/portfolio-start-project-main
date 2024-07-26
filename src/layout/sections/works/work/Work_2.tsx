import React from "react";
import { styled } from "styled-components";


type Work_2PropsType = {
    [x: string]: string | undefined;
     
}
export const Work_2 =(props:Work_2PropsType) =>{
    return (
        <ImageWork_2 src={props.src}/>


         
    )
}

const ImageWork_2 = styled.img`
    width:545px;
    height:350px;
`