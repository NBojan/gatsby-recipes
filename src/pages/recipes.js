import React from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";

const Recipes = () => {
    return (  
        <Layout>
            <Wrapper className="page containerBoot m-auto">
              <AllRecipes />
            </Wrapper>
        </Layout>
    );
}
export const Head = () => <Seo title="Recipes" /> ;
const Wrapper = styled.section`
    padding: 16px 0;
`
export default Recipes;