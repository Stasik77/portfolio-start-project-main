import React from "react";

import photo from "./../../../assets/images/photo.jpg";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexConteiner align={"center"} justify={"space-between"} wrap="wrap" justifyCent="center" >
                    <S.MainWrapper>
                        <S.SmallText>Hello, I’m</S.SmallText>
                        <S.Name>Stanislav Golovanov</S.Name>
                        <S.Skill><p>A wed Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A wed Developer', "A Frontend developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </S.Skill>
                        <Button>Send Email</Button>
                    </S.MainWrapper>
                    <Tilt>
                         <S.Photo src={photo} alt="myphoto" />
                    </Tilt>
                    

                </FlexConteiner>
            </Container>
        </S.Main>
    )




}

