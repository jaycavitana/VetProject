import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll';
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #00b8d4;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    background: transparent;

    &:hover {
        color: red;
        transition: 0.2s ease-in-out;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    background: #00b8d4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 400px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0ms.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #1569C7;
        transition: all 0.3s ease-in-out;
    }
`

export const SideBtnWrap = styled.div` 
    background: #00b8d4;
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    border-radius: 50px;
    background: #1569C7;
    white-space: nowrap;
    padding: 16px 64px;
    color: white;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #D1D4D5;
        color: #1569C7;
    }
`

//Style for modal

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