import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

export const Error = () => {
  let history = useHistory();
  function handleClick() {
    history.goBack();
  }
  return (
    <ErroeDiv>
      <ErrorComponent>
        <h3>Page Not Found</h3>
        <Message>
          We searched everywhere but couldn't find the page you were looking
          for.
        </Message>
        <br />
        <Links>
          <Link onClick={handleClick} className="txt">
            Go Back
          </Link>
          {" . "}
          <Link to="/home" className="txt">
            Quora Home
          </Link>
        </Links>
      </ErrorComponent>
    </ErroeDiv>
  );
};

const ErrorComponent = styled.div`
  box-sizing: border-box;
  width: 300px;
`;
const ErroeDiv = styled.div`
  margin-left: 40%;
  margin-top: 17%;
`;
const Message = styled.div`
  color: #939598;
`;
const Links = styled.div`
  .txt:hover {
    text-decoration: underline;
  }
  .txt {
    color: #195faa;
  }
`;
