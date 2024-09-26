import { styled } from "styled-components"
import { theme } from "../../../../styles/Theme"
import arrowLink from "../../../../assets/images/arrowLink.svg"



const Work = styled.div`
   
     max-width:1100px;
     max-width:100%;
    
     display:flex;
     justify-content:space-between;
     border:1px solid #d60505;
     border-radius:30px;
 
     @media ${theme.media.mobile}, ${theme.media.tablet} {
        flex-direction:column;
        align-items:center;
         
        gap:60px;
         
        
         
         
    }
   
      
      

   
`
const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    /* gap: 35px; */
    width:40%;
    align-items:start;
    padding-left: 50px;
    padding-bottom: 50px;
     
    @media ${theme.media.mobile} ,${theme.media.tablet} {
        align-items:center;
        width:40%;
        
         
    }
   
`

const Image = styled.img`
    width:555px;
    height:395px;
     
    /* position:absolute; */
    bottom:90px;
    right:0px;
    position: relative;
    padding-right: 50px;

    @media ${theme.media.mobile} ,${theme.media.tablet}{
        width:330px;
        height:255px;
        padding:0;
        
        
         
    }
   
     
` 
//нет бордера  размер картинки не краев 

const 
Link = styled.a`
  
     font-size: 20px;
     font-weight: 500;
     position: relative;
     color:${theme.colors.primaryText};
      
     &:hover {
        color:${theme.colors.titleText};
        transition:0.3s;
    
     }

     &::after {
        content:url(${arrowLink});
        padding-left: 25px;
        position:absolute;
        top:3px;
    

  };

     
       @media ${theme.media.mobile} ,${theme.media.tablet}{
        font-size: 15px;
        text-align:center;

        
     &::after {
        content:url(${arrowLink});
        padding-left: 25px;
        position:absolute;
        top:-3px;
    

  };

    }
`


  


const Title = styled.p`
    font-size: 16px;
    padding-top: 75px;
    text-transform:uppercase;
    
    
     
     
`

const Text = styled.p`
    font-size: 35px;
    font-weight: bold;
    padding-top: 25px;
     font-family:"Roboto";
    padding-bottom: 60px;
    text-align:left;
    width: 90%;;
    line-height: 150%;

    @media ${theme.media.mobile} ,${theme.media.tablet} {
        font-size: 15px;
        text-align:center;
        width:65vw;
        /* text-align:left; */
        padding-bottom: 20px;
         
    }

`

const ImgWrapper = styled.div`
     
    @media ${theme.media.mobile} {
        
         align-items:center;
    }
    
    
   
`


 
export const S = {
    ImgWrapper,
    Text,
    Title,
    Link,
    Image,
    TextWrapper,
    Work,
}