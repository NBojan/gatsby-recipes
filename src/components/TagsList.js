import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import getNewTags from "../utils/getNewTags";
import { Link } from "gatsby";

const TagsList = ({ recipes=[] }) => {
    const newTags = getNewTags(recipes);

    return (  
        <Wrapper className="tag-list">
            <h4 className="title">recipes</h4>
            
            <div className="tags">
                {newTags.map((tag,index) => {
                    const [text, value] = tag;
                    const slug = slugify(text,{lower: true});
                    return <Link to={`/tags/${slug}`} className="tag" key={index}>{text} <span className="tag-value">({value})</span></Link>
                })}
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    min-width: 200px;
    margin-right: 32px;

    .title {
        margin-bottom: 32px;
    }

    .tags {
        display: flex;
        flex-direction: column;
    }
    .tag {
        display: block;
        padding: 4px 0;
        color: var(--clr-grey-3);
        text-transform: capitalize;
        transition: all .2s linear;
    }
    .tag:hover {
        color: var(--clr-primary-5);
    }

    @media (max-width: 991px){
        margin-right: 0;
        .tags {
            flex-wrap: wrap;
            flex-direction: row;
        }
        .tag {
            flex-basis: 33%;
        }
        .title {
            margin-bottom: 16px;
        }
        
    }
    @media (max-width: 767px){
        .tag {
            font-size: 15px;
        }
    }
    @media (max-width: 575px){
        .tag {
            flex-basis: 50%;
            font-size: 14px;
        }
    }
`
export default TagsList;