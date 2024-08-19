import React from "react";
import { styled } from "styled-components";

type WorkPropsType = {
title: string
text: string
src: string


}
// как менять размер текста    
export const WorkWhatIdo = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <TextWrapper> 
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Learn More</Link>
            </TextWrapper>
            <ImgWrapper>
            <Image src={props.src}/>
            </ImgWrapper>
        </StyledWork>
    )
}

const StyledWork = styled.div`
   
     /* max-width:1100px; */
     width:100%;
     display:flex;
     justify-content:space-between;
     border:1px solid #C4C4C4;
     border-radius:30px;
     
      

   
`
const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap: 35px;
`

const Image = styled.img`
    width:550px;
    height:394px;
    object-fit:cover;
    
     
` 

const Link = styled.a`
    padding-top: 75px;
     font-style: 20px;


`

const Title = styled.p`
    font-style: 16px;
    padding-top: 25px;
     
`

const Text = styled.p`
    font-style: 35px;
    font-weight: bold;
`

const ImgWrapper = styled.div`
    display:flex;
   
`