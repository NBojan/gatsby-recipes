import React from "react";
import styled from "styled-components";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const AllRecipes = () => {
    const { allContentfulRecipe: {nodes: recipes} } = useStaticQuery(query);
    
    return (  
        <Wrapper>
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </Wrapper>
    );
}
const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
        content {
          tags
        }
      }
    }
  }
`
const Wrapper = styled.article`
    display: flex;
    
    @media (max-width: 991px){
      display: block;
      
      .tag-list {
        margin-bottom: 32px;
      }
    }
`
export default AllRecipes;