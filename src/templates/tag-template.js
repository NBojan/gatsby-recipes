import React from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";

const SingleTag = ({ data: {allContentfulRecipe: {nodes:recipes}}, pageContext: {tag} }) => {
    return (
        <Layout>
            <Wrapper className="page containerBoot m-auto">
                <div className="title ta-center">
                    <h3>{tag}</h3>
                    <div className="underline"></div>
                </div>
                <RecipesList recipes={recipes} />
            </Wrapper>
        </Layout>
    );
}
export const Head = ({ pageContext: {tag} }) => <Seo title={tag} /> ;

const Wrapper = styled.section`
    padding: 16px 0;

    .title {
        margin-bottom: 32px;
    }
`

export const query = graphql`
query getTagRecipes($tag: String) {
    allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}) {
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
export default SingleTag;