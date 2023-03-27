import React from "react";
import styled from "styled-components";

const SingleInstructions = ({ instructions }) => {
    return (  
        <Wrapper className="single-instructions">
            <h3 className="title">instructions</h3>
            <div className="cont">
                {instructions.map((instr, index) => (
                    <div key={index} className="single-instr">
                        <header className="d-flex align-center">
                            <h4>step {index + 1}</h4>
                            <div className="line"></div>
                        </header>
                        <p className="desc light-col">{instr}</p>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    .single-instr {
        margin-bottom: 16px;
    }
    header {
        margin-bottom: 12px;
    }
    h4 {
        font-weight: 600;
        margin-bottom: 0;
        margin-right: 12px;
        text-transform: uppercase;
        color: var(--clr-primary-5);
    }
    .line {
        flex: 1;
        height: 1px;
        background-color: var(--clr-grey-7);
    }    
`
export default SingleInstructions;