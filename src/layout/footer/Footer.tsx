import React from "react";

import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexConteiner } from "../../components/FlexConteiner";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { StyledIcon } from "../../components/icon/Icon";
import { S } from "./Footer_Styles";


const socialItemsData = [
   {
     iconId:"instagram",

   },
   {
    iconId:"ball",

  },
  {
    iconId:"be",

  },
  {
    iconId:"in",

  },



];

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container> 
            <FlexConteiner direction={"row"}  justify="space-between" padding="35px 0 0 0">
                {/* <Name>Stanislav</Name> */}
                <S.Copyight>Designed and developed by Rostam Sadiqi 2021</S.Copyight>
                <S.SocialList>
                    {socialItemsData.map((s ,index:number) => {
                            return  (<S.SocialItem key={index}>
                            <S.SocialLink href="#">
                                <Icon height={"25px"} width={"25px"} viewBox={"0 0 25px 25px"} iconId={s.iconId} />
                            </S.SocialLink>
                        </S.SocialItem>
                        )
                    })}                
                </S.SocialList>
            </FlexConteiner>
            </Container>
        </S.Footer>
    )
}

 
  