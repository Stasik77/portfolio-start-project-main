import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";
import arrowLink from "../../../../assets/images/arrowLink.svg"

type WorkPropsType = {
title: string
text: string
src: string
fs?: string


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
    /* gap: 35px; */
    width:40%;
    align-items:start;
    padding-left: 50px;
     
`

const Image = styled.img`
    width:550px;
    height:394px;
    object-fit:cover;
    position:absolute;
    bottom:45px;
    right:0px;
    position: relative;
     
` 

const Link = styled.a`
    /* padding-top: 75px; */
     font-size: 20px;
     font-weight: 500;
     position: relative;
     color:${theme.colors.primaryText};
      
     &::after {
        content:url(${arrowLink});
        padding-left: 25px;
        position:absolute;
        top:3px;
      
  }
`
// нижняя ссылка прижата 



const Title = styled.p`
    font-size: 16px;
    padding-top: 50px;
    text-transform:uppercase;
    
     
     
`

const Text = styled.p`
    font-size: 35px;
    font-weight: bold;
    padding-top: 30px;
     
    padding-bottom: 70px;
    text-align:left;

`

const ImgWrapper = styled.div`
    display:flex;
    
   
`


 