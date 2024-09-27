import { css, styled } from "styled-components"
import { theme } from "../../../../styles/Theme"
 
//   Menu //


const Link = styled.a`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color:transparent; 



    
`

const Mask = styled.span`
position:absolute;
top:0;
left:0;
display:inline-block;
height:50%;
overflow-y:hidden;
/* outline: 1px solid red; */
color: ${theme.colors.primaryText};

& + & {
    top:50%;
    span {
        display:inline-block;
        transform: translateY(-50%);

    }
}

    
`
 
const MenuItem = styled.li`
position:relative;

&::before {
    content:"";
    display:inline-block;
    height:3px;
    background-color:black;
    position:absolute;
    top:50%;
    left:-10px;
    right:-10px;
    z-index:1;
    transform:scale(0)
}



&:hover {
    &::before {
        transform:scale(1);
    }
    ${Mask} {
        
    transform:skewX(10deg) ;
    color:${theme.colors.font}
  
    

     ${Mask} + ${Mask} {
        transform:skewX(10deg) ;
 
    } 
    
}
}

`
 
//  MobileMenu // 


const MobileMenu = styled.nav`
   
     

`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:99999;
        background-color:rgba(32, 32, 94, 0.9);
        display:none;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            display:flex;
            justify-content:center;
            align-items:center;
        
        `}


    ul {
        display:flex;
        gap:30px;
        justify-content:center;
        
        flex-direction:column;
        align-items:center;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position:fixed;
    top:-100px;
    right:-100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display:block;
        width: 36px;
        height: 2px;
        background-color:${theme.colors.primaryText};
        position:absolute;
        left: 40px;
        bottom: 50px;
    

        ${props => props.isOpen && css<{ isOpen: boolean }>`
        background-color: rgba(255,255,255,0);
        `};
    


        &::before {
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.primaryText};
        position:absolute;
        transform:translateY(-10px);
         
        


        ${props => props.isOpen && css<{ isOpen: boolean }>`
          transform:rotate(-45deg) translateY(0);
        `}
        };

        &::after {
        content: "";
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.primaryText};
        position: absolute;
        transform: translateY(10px);
        
 
        ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform:rotate( 45deg) translateY(0);
        width: 36px;
        
        `};
        };

    };


 `

// DesktopMenu


const DesktopMenu = styled.nav`
    ul {
        display:flex;
        gap:50px;
        justify-content:center;
        position: relative;

        
    }

    
     

`

const ElipsR = styled.img`
    position:absolute;
    right:0;
    top:0;

   
`
const ElipsL = styled.img`
    position:absolute;
    left:0;
    top:0;
    margin-top: 160px;

    @media ${theme.media.tablet} {
         
        margin-top: 360px;
    }
    
`


 


export const S = {
    Link,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
    ElipsR,
    ElipsL,
}
