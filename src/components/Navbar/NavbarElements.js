import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background-color: seashell;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding : 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #00b8d4;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 35%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #00b8d4;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right : -22px;

    @media screen and (max-width: 768px) {
        display: none
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #00b8d4;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: bold;
    height: 100%;
    cursor: pointer;
    margin-top: 10px;

    &.active {
        border-top: 3px solid #00b8d4;
        transition: all 0.1s ease-in-out;
    }

    &:hover{
        border-top: 3px solid #00b8d4;
        transition: all 0.1s ease-in-out;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none
    }
`

export const ImgLink = styled(LinkR)`
    
`

export const Style = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    background-color: #fff;
    box-shadow: 24;
    padding-top: 20px;
    border-radius: 7px;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 1100px) {
        width: 800px;
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 900px) {
        width: 600px;
        height: 300px;
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 700px) {
        width: 400px;
        height: 250px;
        transition: all 0.2s ease-in-out;
    }
`

export const Img = styled.img`
    height: auto;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        padding: 20px;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 900px) {
        width: 90%;
        transition: all 0.2s ease-in-out;
    }
`

export const Button = styled.button`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #1569C7;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #00b8d4;
        color: white;
    }
`