import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from "./RightNav";

const StyledBurger = styled.div`
    margin: 10vw 5vw 10vw 5vw;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;

    @media(max-width: 978px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#33beb3' : '#33beb3'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
    
        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 2};
        }
    
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = (props)=> {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <RightNav  changeLanguage={props.changeLanguage} currentLang={props.currentLang} setRef={props.setRef} scroll={props.scroll} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Burger;