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
import { S } from "./Slogan_Styles";

export const Slogan:React.FC = () => {
    return (
        <S.Slogan>
            <Container secondCont >
                <FlexConteiner  marg ="20px 0 0 0">
                    <S.SloganWrapper>
                        <S.SloganText>Have any project in mind?</S.SloganText>
                        <S.SloganTextSecond>Let’s work together and I will help you by all my best.</S.SloganTextSecond> 
                          </S.SloganWrapper>
                        <S.BtnWrapper>
                            <Button secondBtn >Let’s talk</Button>
                        </S.BtnWrapper>
                </FlexConteiner>
            </Container>
        </S.Slogan>
    )
}

 