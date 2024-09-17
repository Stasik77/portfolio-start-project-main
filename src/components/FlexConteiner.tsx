import { styled } from "styled-components";
import { theme } from "../styles/Theme";

type FlexConteinerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    justifyCent?: string
    padding?: string
    marg?: string
    margMedia?: string
    directionMedia?: string
    alignMedia?: string
    widthMedia?: string
    

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
    padding:${props => props.padding};
    margin: ${props => props.marg};
     
    @media ${theme.media.mobile}, ${theme.media.tablet}{
          /* border:2px solid green; */
          justify-content: ${props => props.justifyCent || "flex-start"};
          margin: ${props => props.margMedia};
          width: ${props => props.widthMedia};
          
          
        }
   

`


// media запрос в самой Компоненте делать ,?