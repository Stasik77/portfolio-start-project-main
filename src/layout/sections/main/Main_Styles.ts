import { styled } from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import ellipR from "../../../../src/assets/images/EllipseR.svg"
import ellipL from "../../../../src/assets/images/EllipseL.svg"

const  Main = styled.section`
background-color:rgba(15,191,97,0.1);
/* display:flex;  */
 /* min-width:1440px;  */
padding-bottom: 130px;
padding-top: 150px;

`

const PhotoWrapper = styled.div`
    

`
const MainWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:40%;

   
     
    @media ${theme.media.mobile},${theme.media.tablet} {
         margin:0 auto;
    }

 `

const SmallText = styled.p`
    color:${theme.colors.primasyBtn};
    /* font-size: 30px; */
    /* font-weight: 400; */
    /* padding-bottom: 7px; */
    text-align:left;
    padding-top: 15px;
     

    ${font({color:theme.colors.primasyBtn, weight:400,Fmax:30, Fmin:20,})}
    
`



const Photo = styled.img`
    width:550px;
    height:390px;
    /* object-fit:cover; */
    /* margin-top:45px; */
    border-radius:25px;
    /* max-width:100%; */

 @media ${theme.media.tablet} {
    width:350px;
    height: 250px;
    margin-top: 25px; 
    

 }
     
`


const Name = styled.h2`
${font({family:"'Poppins' ,sans-serif",weight:700,Fmax:60, Fmin:36,})}

margin-bottom:40px;
margin-right: 125px;
margin-top: 7px;
/* font-family: "Poppins" ,sans-serif; */
/* font-weight: 700; */
/* font-size: 60px; */
color: #000;
text-align:left;


&::before {
        content:url(${ellipL});
        left:-10px;
        position:absolute;
        display:inline-block;


        @media ${theme.media.mobile}, ${theme.media.tablet}{
            display:none;
    

}
    
}
    
&::after {
        content:url(${ellipR});
        right:0%;
        position:absolute;
        top:0%;
        
        @media ${theme.media.mobile}, ${theme.media.tablet}{
            display:none;
    

}

        
    
}
    

 
@media ${theme.media.mobile}, ${theme.media.tablet}{
    margin-top:17px;
    margin-bottom: 15px;
    width: 100%;
    

}

`
const Skill = styled.h1`
text-transform:uppercase;
text-align:left;
padding-bottom:20px;

p {
    display:none
}



@media ${theme.media.mobile}, {
 font-size:11px;
}
` 
 
export const S = {
     Main,
    Name,
    Photo,
    SmallText,
    PhotoWrapper,
    MainWrapper,
    Skill
}