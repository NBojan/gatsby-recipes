import React from "react";
import slugify from "slugify";
import Seo from "../components/Seo";
import styled from "styled-components";
import Times from "../components/Times";
import Layout from "../components/Layout";
import SingleThings from "../components/SingleThings";
import SingleInstructions from "../components/SingleInstructions";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SingleRecipe = ({ data }) => {
    const { prepTime, cookTime, title, servings, desc: {desc}, content: {tags, tools, instructions, ingredients}, image } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    return (  
        <Layout>
            <Wrapper className="page containerBoot m-auto">
                <article className="single-hero">
                    <GatsbyImage image={pathToImage} alt={title} className="hero-img" />

                    <div className="hero-info">
                        <h2 className="title">{title}</h2>
                        <p className="desc light-col">{desc}</p>
                        <Times prepTime={prepTime} cookTime={cookTime} servings={servings} />
                        <div className="tags d-flex align-center">
                            Tags : {tags.map((tag, index) => {
                                const slug = slugify(tag, {lower:true});
                                return (
                                    <Link to={`/tags/${slug}`} key={index} className="btn btn-s btn-prim tag-btn">{tag}</Link>
                                )
                            })}
                        </div>
                    </div>
                </article>

                <article className="single-info">
                    <SingleInstructions instructions={instructions} />
                    <SingleThings ingredients={ingredients} tools={tools} />
                </article>
            </Wrapper>
        </Layout>
    );
}
export const Head = ({ data }) => {
    const { title, desc: {desc} } = data.contentfulRecipe;
    return <Seo title={title} description={desc} />
}

const Wrapper = styled.section`
    padding: 16px 0;

    .single-hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 48px;
    }
    .hero-img {
        height: 400px;
        flex-basis: 41%;
        border-radius: 5px;
    }
    .hero-info {
        flex-basis: 49%;
    }
    .title {
        margin-bottom: 24px;
    }
    .desc {
        line-height: 2;
        font-size: 17px;
    }
    .tag-btn {
        margin: 0 6px;
        text-transform: capitalize;
    }
    .light-col {
        color: var(--clr-grey-3);
    }

    /*second part*/
    .single-info {
        display: flex;
        justify-content: space-between;
    }
    .single-instructions {
        flex-basis: 60%;
    }
    .single-things {
        flex-basis: 30%;
    }


    @media (max-width: 991px){
        .single-hero, .single-info {
            flex-direction: column;
            align-items: stretch;
            justify-content: stretch;
        }
        .hero-img, .single-instructions {
            flex-basis: 100%;
            margin-bottom: 32px;
        }
        .hero-info, .single-things {
            flex-basis: 100%;
        }
        .desc {
            font-size: 16px;
        }
    }
    @media (max-width: 767px){
        .desc {
            font-size: 15px;
        }
    }
    @media (max-width: 575px){
        .desc {
            font-size: 14px;
        }
    }
`
export const query = graphql`
query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      prepTime
      cookTime
      title
      servings
      desc {
        desc
      }
      content {
        tags
        tools
        instructions
        ingredients
      }
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
export default SingleRecipe;