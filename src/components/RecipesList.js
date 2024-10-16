import React from "react";
import styled from "styled-components";
import slugify from "slugify";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes=[] }) => {
    return (  
        <Wrapper>
            {recipes.map((recipe, index) => {
                const {title, prepTime, cookTime, image} = recipe;
                const pathToImg = getImage(image);
                const slug = slugify(title, {lower: true});
                return (
                    <Link to={`/${slug}`} className="card" key={index}>
                        <GatsbyImage image={pathToImg} alt={title} className="card-img" />
                        <div className="card-info">
                            <h4>{title}</h4>
                            <p>
                                <span className="prep-time">Prep : {prepTime}min </span>
                                |
                                <span className="cook-time"> Cook : {cookTime}min</span>
                            </p>
                        </div>
                    </Link>
                )
            })}
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .card {
        flex-basis: 32%;
        margin-bottom: 32px;
    }
    .card-img {
        height: 162px;
        border-radius: 8px;
        transition: all .2s linear;
        box-shadow: var(--dark-shadow);
    }
    .card:hover .card-img {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    }
    .card-info {
        margin-top: 16px;
        h4 {
            margin-bottom: 8px;
        }
        p {
            color: var(--clr-grey-3);
            font-size: 15px;
        }
    }


@media (min-width: 576px) and (max-width: 1199px){
    .card {
        flex-basis: 48.5%;
    }
}
@media (max-width: 767px){
    .card-info {
        p {
            font-size: 14px;
        }
    }
}
@media (max-width: 575px){
    .card {
        flex-basis: 100%;
    }
}
`

export default RecipesList;