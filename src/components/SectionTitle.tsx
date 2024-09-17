import { styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";







export const SectionTitle = styled.h2`
${font({weight:700,Fmax:40,Fmin:32})}
text-align: center;
/* padding-top: 30px; */
 
color:${theme.colors.titleText};
padding-bottom: 55px;
    
`
export const SectionServisTitile = styled.p`
    text-align: center;
    font-size:18px;
    padding-bottom: 16px; 
    padding-top:25px;
    color:${theme.colors.font};
`


// как менять значения заданые тут 