import React from "react";
import styled from "styled-components";

const SingleThings = ({ ingredients, tools }) => {
    return (  
        <Wrapper className="single-things">
            <div className="single-ingredients">
                <h3 className="title">ingredients</h3>
                <div className="cont">
                    {ingredients.map((item, index) => (
                        <div className="thing-item" key={index}>
                            <p className="desc light-col">{item}</p>
                        </div>
                     ))}
                </div>
            </div>

            <div className="single-tools">
                <h3 className="title">tools</h3>
                <div className="cont">
                    {tools.map((item, index) => (
                        <div className="thing-item" key={index}>
                            <p className="desc tool">{item}</p>
                        </div>
                     ))}
                </div>
            </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    .single-ingredients, .single-tools {
        margin-bottom: 32px;
    }
    .thing-item {
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--clr-grey-7);
    }
    .tool {
        text-transform: capitalize;
        color: var(--clr-primary-5);
    }
`
export default SingleThings;