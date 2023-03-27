import React from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const About = ({ data: {allContentfulRecipe: {nodes:featured}} }) => {
    return (  
        <Layout>
            <Wrapper className="page containerBoot m-auto">
                <article className="about-cont">
                    <div className="element info">
                        <h2 className="mb-24">I'm baby coloring book poke taxidermy</h2>
                        <p className="mb-16">
                            Taxidermy forage glossier letterpress heirloom before they 
                            sold out you probably haven't heard of them banh mi biodiesel chia.
                        </p>
                        <p className="mb-16">Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                        <Link to="/contact" className="btn btn-m btn-prim capitalize">contact</Link>
                    </div>

                    <div className="element image-cont">
                        <StaticImage src="../assets/images/about.jpeg" placeholder="blurred" layout="constrained" className="about-img" alt="AboutImg" />
                    </div>
                </article>

                <article className="featured-cont">
                    <h4 className="ta-center mb-24">Look at this awesomeness!</h4>
                    <RecipesList recipes={featured} />
                </article>
            </Wrapper>
        </Layout>
    );
}
export const Head = () => <Seo title="About" /> ;

export const query = graphql`
  query {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData
        }
      }
    }
  }
`
const Wrapper = styled.section`
    padding: 16px 0;
    
    .about-cont {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 48px;
    }

    .element {
        flex-basis: 48%;
    }
    .info {
        p {
            color: var(--clr-grey-3);
            line-height: 1.75;
        }
    }
    .about-img {
        height: 500px;
        border-radius: 5px;
    }

    @media (max-width: 991px){
        .about-cont {
            display: block;
        }
        .info {
            margin-bottom: 32px;
        }
    }
    @media (max-width: 575px){
        .info {
            p {
                font-size: 14px;
            }
        }
    }
`
export default About;