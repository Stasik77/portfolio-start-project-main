import { styled } from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import arrPoligon from "../../../assets/images/Polygon1.svg"

const SloganWrapper = styled.div`
    
    border-radius:15px;
    height: 250px;
    display:flex;
     flex-direction:column;
     width: 80%;
     /* position:relative; */
     @media ${theme.media.mobile} {
        height:30vh;
   }
   
`
const BtnWrapper = styled.div`
    display:block;
    align-content:center;
    padding-left: 20px;
    padding-top: 20px;

    & ::before {
        content:url(${arrPoligon});
        position:absolute;
        top:60px;
        right:300px;
    }

    
    
 `


const SloganText = styled.p`
    text-align:left;
    padding-top: 80px;
    font-size: 45px;
    color:${theme.colors.btnBg};
    font-weight: 500;
    padding-left: 45px;

   
   @media ${theme.media.mobile},${theme.media.tablet} {
     ${font({color:theme.colors.btnBg, weight:500, Fmax:20, Fmin:18})} 
   }

`
const SloganTextSecond = styled.p`
    font-size:18px;
    font-weight: 500;
    color:${theme.colors.btnBg};
    padding-top: 25px;
    padding-left: 45px;
    @media ${theme.media.mobile}  {
     ${font({color:theme.colors.btnBg, weight:500, Fmax:15, Fmin:13})} 
       
   }


`
const Slogan = styled.section`
     padding:0;
     `

     export const S = {
        SloganWrapper,
        Slogan,
        SloganTextSecond,
        SloganText,
        BtnWrapper,

     }