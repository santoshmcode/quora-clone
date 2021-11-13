import React from "react";
import { QandA } from "../HomeContents/QandA";
import styled from "styled-components";

const Unanswered = () => {
    return (
        <Container>
            <div className="sub-container">
                <QandA flag />
            </div>
        </Container>
    );
};

export default Unanswered;

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e6e6e6;
    background-color: #f0f2f3;

    .sub-container {
        margin: 1rem auto;
    }
`;
