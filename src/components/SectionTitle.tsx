import { styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";







export const SectionTitle = styled.h2`
${font({weight:700,Fmax:40,Fmin:32})}
text-align: center;
 
color:${theme.colors.titleText};
padding-bottom: 98px;
    
`
export const SectionServisTitile = styled.p`
    text-align: center;
    font-size:18px;
    padding-bottom: 16px; 
    color:${theme.colors.font};
`


// как менять значения заданые тут 