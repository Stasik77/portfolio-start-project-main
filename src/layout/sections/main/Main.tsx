import React from "react";
import { styled } from "styled-components";
import photo from "./../../../assets/images/photo-34.jpg";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";


export const Main =() => {
    return(
        <StyledMain>
            <Container>
            <FlexConteiner align={"center"} justify={"space-around"}>
            <div>
                <SmallText>Hello, I’m</SmallText>
                <Name>Stanislav Golovanov</Name>
                <Button>Send Email</Button>
                
            </div>

            <Photo src={photo} alt="myphoto"/>
            </FlexConteiner>
            </Container>
        </StyledMain> 
    )

}
const StyledMain = styled.div`
min-height: 100vh ;
background-color:rgba(15,191,97,0.1);
display:flex;
 

 

`

const SmallText = styled.span`
    color:${theme.colors.primasyBtn};
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 7px;
    
`

const Photo = styled.img`
    width:548px;
    height:500px;
    object-fit:cover;
    /* margin-top:45px; */
    border-radius:25px;
     
`


const Name = styled.h1`
margin-bottom:155px;
margin-right: 125px;
font-family: "Poppins" sans-serif;
font-weight: 700;
font-size: 60px;
color: #000;
    
`
