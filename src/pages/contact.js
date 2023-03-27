import React from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import FormRow from "../components/FormRow";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";

const Contact = ({ data: {allContentfulRecipe: {nodes:featured}} }) => {
    return (  
        <Layout>
            <Wrapper className="page containerBoot m-auto">
                <article className="contact-cont">
                    <div className="element info">
                        <h3 className="mb-24">want to get in touch?</h3>
                        <p className="mb-16">
                            Four dollar toast biodiesel plaid salvia actually pickled 
                            banjo bespoke mlkshk intelligentsia edison bulb synth.
                        </p>
                        <p className="mb-16">Cardigan prism bicycle rights put a bird on it deep v.</p>
                        <p>
                            Hashtag swag health goth air plant, raclette listicle 
                            fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
                        </p>
                    </div>

                    <form action="https://formspree.io/f/xayzyznz" method="POST" className="element">
                        <FormRow type="text" name="name" />
                        <FormRow type="email" name="email" />
                        <div className="form-row">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-l btn-prim submit-btn">submit</button>
                    </form>
                </article>

                <article className="featured-cont">
                    <h4 className="ta-center mb-24">Look at this awesomeness!</h4>
                    <RecipesList recipes={featured} />
                </article>
            </Wrapper>
        </Layout>
    );
}
export const Head = () => <Seo title="Contact" /> ;

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
    
    .contact-cont {
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

    form {
        border-radius: 5px;
        padding: 36px 48px;
        background-color: #fff;
        transition: all .2s ease;
        box-shadow: var(--light-shadow);
    }
    form:hover {
        box-shadow: var(--dark-shadow);
    }

    .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        label {
            text-transform: capitalize;
            margin-bottom: 8px;
        }

        input, textarea {
            width: 100%;
            font-size: 15px;
            padding: 8px 14px;
            border-radius: 5px;
            background-color: var(--clr-grey-10);
            border: 1px solid var(--clr-grey-8);
        }
        textarea {
            height: 112px;
        }
    }
    .submit-btn {
        width: 100%;
        text-transform: capitalize;
    }

    @media (max-width: 991px){
        .contact-cont {
            display: block;
        }
        .info {
            margin-bottom: 32px;
            p {
                font-size: 15px;
            }
        }
    }
    @media (max-width: 575px){
        .info {
            p {
                font-size: 14px;
            }
        }
        .form-row {
            label {
                font-size: 14px;
            }
            input, textarea {
                font-size: 14px;
                padding: 6px 12px;
            }
        }
    }
`
export default Contact;