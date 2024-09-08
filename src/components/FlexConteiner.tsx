import { styled } from "styled-components";
import { theme } from "../styles/Theme";

type FlexConteinerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    justifyCent?: string
    paddingbt?: string
     
    

}
export const FlexConteiner = styled.div<FlexConteinerPropsType>`
    display:flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "streght"};
    flex-wrap: ${props =>props.wrap || "nowrap"};
    height:100%;
    gap:${props => props.gap};
    /* border:2px solid green; */
    padding-bottom:${props => props.paddingbt};
     
    @media ${theme.media.tablet}, ${theme.media.tablet}{
          border:2px solid green;
          justify-content: ${props => props.justifyCent || "flex-start"};
        }
   

`


// media запрос в самой Компоненте делать ,?