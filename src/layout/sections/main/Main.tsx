import React from "react";
import { styled } from "styled-components";
import photo from "./../../../assets/images/photo-34.jpg";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";


export const Main =() => {
    return(
        <StyledMain>
            <Container>
            <FlexConteiner align={"center"} justify={"space-around"}>
            <div>
                <span>Hello, I’m</span>
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

const Photo = styled.img`
    width:548px;
    height:500px;
    object-fit:cover;
    margin-top:45px;
    border-radius:25px
`


const Name = styled.h1`
margin-bottom:155px;
 
    
`
