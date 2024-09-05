import React from "react";
import { styled } from "styled-components";
import photo from "./../../../assets/images/photo.jpg";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
export const Main =() => {
    return(
        <StyledMain>
            <Container>
            <FlexConteiner  align={"center"} justify={"space-between"} wrap="wrap" >
            <MainWrapper>
                <SmallText>Hello, I’m</SmallText>
                <Name>Stanislav Golovanov</Name>
                <Button>Send Email</Button>
            </MainWrapper>
             
            <Photo src={photo} alt="myphoto"/>
             
            </FlexConteiner>
            </Container>
         </StyledMain> 
    )

}
const StyledMain = styled.section`
background-color:rgba(15,191,97,0.1);
/* display:flex;  */
 /* min-width:1440px;  */
padding-bottom: 50px;
padding-top: 150px;

`

const PhotoWrapper = styled.div`
    

`
const MainWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
     
     
    @media ${theme.media.mobile},${theme.media.tablet} {
         margin:0 auto;
    }
`
 

const SmallText = styled.p`
    color:${theme.colors.primasyBtn};
    /* font-size: 30px; */
    /* font-weight: 400; */
    /* padding-bottom: 7px; */
    text-align:left;
    padding-top: 15px;
     

    ${font({weight:400,Fmax:30, Fmin:20,})}
    
`



const Photo = styled.img`
    width:548px;
    height:390px;
    /* object-fit:cover; */
    /* margin-top:45px; */
    border-radius:25px;
     

 @media ${theme.media.mobile},${theme.media.tablet} {
    width:500px;
    height: 350px;
    margin-top:20px ;     

 }
     
`


const Name = styled.h1`
${font({family:"'Poppins' ,sans-serif",weight:700,Fmax:60, Fmin:36,})}

margin-bottom:145px;
margin-right: 125px;
margin-top: 7px;
/* font-family: "Poppins" ,sans-serif; */
/* font-weight: 700; */
/* font-size: 60px; */
color: #000;
text-align:left;
    

@media ${theme.media.mobile}, ${theme.media.tablet}{
    margin-top:17px;
    margin-bottom: 15px;

}

`

 