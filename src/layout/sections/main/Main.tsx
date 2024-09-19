import React from "react";
 
import photo from "./../../../assets/images/photo.jpg";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { S } from "./Main_Styles";
 


export const Main: React.FC =() => {
    return(
        <S.Main>
            <Container>
            <FlexConteiner  align={"center"} justify={"space-between"} wrap="wrap" justifyCent="center" >
            <S.MainWrapper>
                <S.SmallText>Hello, I’m</S.SmallText>
                <S.Name>Stanislav Golovanov</S.Name>
                <Button>Send Email</Button>
            </S.MainWrapper>
             
            <S.Photo src={photo} alt="myphoto"/>
             
            </FlexConteiner>
            </Container>
         </S.Main> 
    )




}

 