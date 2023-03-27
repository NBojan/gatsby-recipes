import React from "react";
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs";
import styled from "styled-components";

const Times = ({ prepTime, cookTime, servings }) => {
    return (  
        <Wrapper className="times">
            <div className="time-item">
                <BsClock />
                <p>Prep Time</p>
                <p className="light-col">{prepTime} min.</p>
            </div>
            <div className="time-item">
                <BsClockHistory />
                <p>Cook Time</p>
                <p className="light-col">{cookTime} min.</p>
            </div>
            <div className="time-item">
                <BsPeople />
                <p>Servings</p>
                <p className="light-col">{servings}</p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    margin: 32px 0;
    justify-content: space-around;
    
    .time-item {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    svg {
        font-size: 28px;
        margin-bottom: 8px;
    }
    p {
        font-size: 15px;
    }
    .light-col {
        color: var(--clr-grey-3);
    }
    @media (max-width: 767px){
        svg {
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 575px){
        svg {
            font-size: 20px;
        }
        p {
            font-size: 13px;
        }
    }
`
export default Times;