import { styled } from "styled-components";


type ContainerPropsType = {
 mtop?:string
}

export const Container = styled.div<ContainerPropsType>`
    max-width:1146px;
    width:100%;
    min-height:100%;
    padding:0 15px;
    margin:0 auto;
    outline:1px solid #8a2b2b;
    margin-top:${props => props.mtop};
     

`