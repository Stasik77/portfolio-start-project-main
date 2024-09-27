import React from "react";
import { S } from "./..//menu/headerMenu/HeaderMenu_Styles"



const items = [
    {
         title: "Home",
        href: "home"
    },

    {
        title: "About",
        href: "about"

    },
    {
        title: "Service",
        href: "service"
    },
    {
        title: "My work",
        href: "mywork"
    },
    {
        title: "Resume",
        href: "resume"
    }


]

export const Menu: React.FC=() => {
    return (
        <ul >
        {items.map((item: {href:string,title:string} ,index: number) => {
            return <S.MenuItem key={index}>
                <S.NavLink
                activeClass="active"
                 spy={true}
                 to={item.href}
                 smooth={true}
                 offset={1}
                > 
                {item.title}
                <S.Mask>
                <span>{item.title}</span>
                </S.Mask>
                <S.Mask>
                <span>{item.title}</span>
                </S.Mask>
                </S.NavLink>
            </S.MenuItem>
        })}
    </ul>
    );
};

 
 