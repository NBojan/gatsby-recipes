import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useState } from "react";
import { links } from "../utils/links";
import { RxHamburgerMenu } from "react-icons/rx";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
    const [burger, setBurger] = useState();

    return (  
        <Wrapper>
            <nav className="containerBoot m-auto">
                <div className="nav-one">
                    <Link to="/" className="mr-16">
                        <StaticImage src="../assets/images/logo.svg" alt="Recipes" className="logo-img" placeholder="blurred" />
                    </Link>

                    <button type="button" className="burger-btn btn btn-m btn-prim" onClick={() => setBurger(!burger)}><RxHamburgerMenu /></button>
                </div>

                <div className={burger ? "links show-links" : "links"}>
                    {links.map((link,index) => {
                        const {name, path, style} = link;
                        if(name === "contact") return (
                            <div className={style} key={index}><Link to={path} className="btn btn-s btn-prim">{name}</Link></div>
                        )
                        return <Link to={path} key={index} className={style} activeClassName="active-link">{name}</Link>
                    })}
                </div>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    nav {
        display: flex;
        align-items: center;
        height: 6rem;
    }
    .nav-one {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo-img {
        width: 200px;
    }
    .burger-btn {
        display: none;
        svg {
            font-size: 24px;
        }
    }

    .links {
        flex: 1;
        display: flex;
        align-items: center;
        text-transform: capitalize;
    }
    .link {
        font-size: 18px;
        color: var(--clr-grey-1);
        margin-left: 16px;
        letter-spacing: 1px;
        transition: all .2s linear;
    }
    .active-link {
        color: var(--clr-primary-5);
    }
    .link:hover {
        color: var(--clr-primary-5);
    }
    .contact-link {
        width: 100%;
        text-align: right;
    }
    @media (max-width: 991px){
        nav {
            display: block;
            height: auto;
        }
        .burger-btn {
            display: flex;
        }
        .nav-one {
            width: 100%;
            height: 6rem;
        }
        .links {
            display: none;
            flex-direction: column;
            text-align: center;
            transition: all .2s linear;
            .link {
                width: 100%;
                padding: 24px 0;
                margin-left: 0;
                border-top: 1px solid var(--clr-grey-5);
            }
            .contact-link {
                width: 100%;
                padding: 24px 0;
                text-align: center;
                border-top: 1px solid var(--clr-grey-5);
            }
        }
        .show-links {
            display: flex;
        }
    }
`
export default Navbar;