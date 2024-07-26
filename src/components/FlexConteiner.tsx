import { styled } from "styled-components";


type FlexConteinerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}
export const FlexConteiner = styled.div<FlexConteinerPropsType>`
    display:flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "streght"};
    flex-wrap: ${props =>props.wrap || "nowrap"};


`