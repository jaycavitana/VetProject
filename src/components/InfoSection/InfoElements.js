import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#00b8d4' : '#fff')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    margin-left: 25px;
    grid-area: col1;

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    transition: all 0.2s ease-in-out;
    grid-area: col2;
    
    &:hover {
        padding: 0 25px;
        transition: all 0.2s ease-in-out;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #1569C7;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#00b8d4' : '#fff')};

    @media screen and (max-width : 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#1569C7' : 'gray')};;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    border-radius: 50px;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
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


export const ImgLink = styled(LinkR)`
    
`