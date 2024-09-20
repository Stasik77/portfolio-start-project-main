import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";
import arrowLink from "../../../../assets/images/arrowLink.svg"
import { S } from "./WorkWhatiDo_Styles";

type WorkPropsType = {
title: string
text: string
src: string
// fs?: string


}
// как менять размер текста    
export const WorkWhatIdo: React.FC<WorkPropsType> = (props:WorkPropsType) => {
    return (
        <S.Work>
            <S.TextWrapper> 
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
            <S.Link href={"#"}>Learn More</S.Link>
              </S.TextWrapper>
            <S.ImgWrapper>
            <S.Image src={props.src}/>
            </S.ImgWrapper>
           
        </S.Work>
    )
}


 