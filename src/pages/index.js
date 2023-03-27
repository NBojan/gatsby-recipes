import React from "react"
import Seo from "../components/Seo";
import Hero from "../components/Hero"
import styled from "styled-components"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"


export default function Home() {
  return (
    <Layout>
      <Wrapper className="page containerBoot m-auto">
        <Hero />
        <AllRecipes />
      </Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" /> ;

const Wrapper = styled.section`
  padding: 16px 0;
`