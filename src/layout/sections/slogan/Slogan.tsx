import React from "react";
import { styled } from "styled-components";
import { SectionServisTitile, SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Footer } from "../../footer/Footer";
import arrPoligon from "../../../assets/images/Polygon1.svg"
import { font } from "../../../styles/Common";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container secondCont >
                <FlexConteiner >
                    <SloganWrapper>
                        <SloganText>Have any project in mind?</SloganText>
                        <SloganTextSecond>Let’s work together and I will help you by all my best.</SloganTextSecond> 
                          </SloganWrapper>
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
     /* position:relative; */
     @media ${theme.media.mobile} {
        height:30vh;
   }
   
`
const BtnWrapper = styled.div`
    display:block;
    align-content:center;
    padding-left: 20px;
    padding-top: 20px;

    & ::before {
        content:url(${arrPoligon});
        position:absolute;
        top:60px;
        right:300px;
    }

    
    
 `


const SloganText = styled.p`
    text-align:left;
    padding-top: 80px;
    font-size: 45px;
    color:${theme.colors.btnBg};
    font-weight: 500;
    padding-left: 45px;

   
   @media ${theme.media.mobile},${theme.media.tablet} {
     ${font({color:theme.colors.btnBg, weight:500, Fmax:20, Fmin:18})} 
   }

`
const SloganTextSecond = styled.p`
    font-size:18px;
    font-weight: 500;
    color:${theme.colors.btnBg};
    padding-top: 25px;
    padding-left: 45px;
    @media ${theme.media.mobile}  {
     ${font({color:theme.colors.btnBg, weight:500, Fmax:15, Fmin:13})} 
       
   }


`
const StyledSlogan = styled.section`
     padding:0;
      
`
