import React from "react";
import slugify from "slugify";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import getNewTags from "../utils/getNewTags";
import { graphql, Link } from "gatsby";

const Tags = ({ data }) => {
    const newTags = getNewTags(data.allContentfulRecipe.nodes);

    return (  
        <Layout>
            <Wrapper className="page containerBoot m-auto">
                <article className="flex-cont">
                    {newTags.map((tag,index) => {
                        const [text, value] = tag;
                        const slug = slugify(text, {lower:true});
                        return (
                            <Link to={`/tags/${slug}`} key={index} className="tag-link">
                                <h4>{text}</h4>
                                <p><span className="tag-value">{value}</span> recipe</p>
                            </Link>
                        )
                    })}
                </article>
            </Wrapper>
        </Layout>
    );
}
export const Head = () => <Seo title="Tags" /> ;
const Wrapper = styled.section`
    padding: 16px 0;

    .flex-cont {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .tag-link {
        flex-basis: 31%;
        display: block;
        padding: 16px;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 32px;
        transition: all .2s linear;
        background-color: var(--clr-grey-6);
        h4,p {
            color: #fff;
        }
    }
    .tag-link:hover {
        background-color: var(--clr-primary-5);
    }

    @media (max-width: 991px) and (min-width: 576px){
        .tag-link {
            flex-basis: 48%;
            margin-bottom: 28px;
        }
    }
    @media (max-width: 575px){
        .tag-link {
            flex-basis: 100%;
            margin-bottom: 20px;
        }
    }
`
export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
` 
export default Tags;