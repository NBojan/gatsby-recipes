import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (  
        <Wrapper>
            <p className="mr-4">© {new Date().getFullYear()} <span>NbRecipes</span>,</p>
            <p>Built with <span>Gatsby</span></p>
        </Wrapper>
    );
}
const Wrapper = styled.footer`
    height: 4rem;
    background-color: var(--clr-black);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #fff;
        span {
            color: var(--clr-primary-5);
        }
    }

    @media (max-width: 767px){
        flex-direction: column;
    }
`
export default Footer;