import React from "react";
import { styled } from "styled-components";
import { SectionServisTitile, SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexConteiner } from "../../../components/FlexConteiner";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container secondCont mtop={"160px"}>
                <FlexConteiner >
                    <SloganWrapper>
                        <SloganText>Have any project in mind?</SloganText>
                        <SloganTextSecond>Let’s work together and I will help you by all my best.</SloganTextSecond>   </SloganWrapper>
                        <BtnWrapper>
                            <Button secondBtn >Let’s talk</Button>
                        </BtnWrapper>

                 

                </FlexConteiner>
            </Container>
        </StyledSlogan>
    )
}

const SloganWrapper = styled.div`
    
    border-radius:15px;
    height: 250px;
    display:flex;
     flex-direction:column;
     width: 80%;
      
     
     
   

    
     
   
`
const BtnWrapper = styled.div`
    display:block;
    align-content:center;
    
      

    
 `


const SloganText = styled.p`
    text-align:left;
    padding-top: 70px;
    font-size: 45px;
    color:${theme.colors.btnBg};
    font-weight: 500;
    padding-left: 45px;

`
const SloganTextSecond = styled.p`
    font-size:18px;
    font-weight: 500;
    color:${theme.colors.btnBg};
    padding-top: 25px;
    padding-left: 45px;


`
const StyledSlogan = styled.section`
     
`
