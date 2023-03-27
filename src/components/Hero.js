import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (  
        <Wrapper>
            <StaticImage src="../assets/images/main.jpeg" layout="fullWidth" placeholder="blurred" className="hero-img" alt="HeroImage" />
            <div className="hero-text">
                <h1 className="col-fff ls-3">NB Recipes</h1>
                <h3 className="col-fff ls-3">no fluff, just recipes</h3>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 30vh;
    margin-bottom: 32px;
    position: relative;

    .hero-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .hero-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        background-color: rgba(0,0,0,0.4);
    }
`
export default Hero;