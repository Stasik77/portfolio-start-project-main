import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";
import arrowLink from "../../../../assets/images/arrowLink.svg"

type WorkPropsType = {
title: string
text: string
src: string
// fs?: string


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
   
     max-width:1100px;
     width:100%;
    
     display:flex;
     justify-content:space-between;
     border:1px solid #d60505;
     border-radius:30px;
 
     @media ${theme.media.mobile} {
        flex-direction:column;
        align-items:center;
        gap:60px;
        
         
         
    }
   
      
      

   
`
const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    /* gap: 35px; */
    width:40%;
    align-items:start;
    padding-left: 50px;
    padding-bottom: 50px;
     
    @media ${theme.media.mobile} {
        align-items:center;
        
        
         
    }
   
`

const Image = styled.img`
    width:555px;
    height:395px;
     
    /* position:absolute; */
    bottom:90px;
    right:0px;
    position: relative;
    padding-right: 50px;

    @media ${theme.media.mobile} {
        width:330px;
        height:255px;
        padding:0;
        
         
    }
   
     
` 
//нет бордера  размер картинки не краев 

const Link = styled.a`
  
     font-size: 20px;
     font-weight: 500;
     position: relative;
     color:${theme.colors.primaryText};
      


     &::after {
        content:url(${arrowLink});
        padding-left: 25px;
        position:absolute;
        top:3px;
    

  };

     
       @media ${theme.media.mobile} ,${theme.media.tablet}{
        font-size: 15px;
        text-align:center;

        
     &::after {
        content:url(${arrowLink});
        padding-left: 25px;
        position:absolute;
        top:-3px;
    

  };

    }
`


  
 
 



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

    @media ${theme.media.mobile} {
        font-size: 15px;
        text-align:center;
    }

`

const ImgWrapper = styled.div`
     
    @media ${theme.media.mobile} {
        
         align-items:center;
    }
    
    
   
`


 