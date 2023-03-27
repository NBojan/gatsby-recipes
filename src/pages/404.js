import React from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Layout from "../components/Layout";

const ErrorPage = () => {
    return (  
        <Layout>
            <Wrapper className="page containerBoot m-auto">
                <div className="ta-center">
                    <h1>404</h1>
                    <h3>page not found</h3>
                </div>
            </Wrapper>
        </Layout>
    );
}
export const Head = () => <Seo title="Error" /> ;
const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    
    h1 {
        font-size: 5rem;
    }
`

export default ErrorPage;
