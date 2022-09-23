import classes from "./DisplayBox.module.css";

import styled from "styled-components";

const StyledDisplayBox = styled.div`
  .display--box {
    background: #fff;
    color: black;
    padding: 20px;
    flex-grow: 1;
  }

  .display--box:not(:last-child) {
    margin-right: 30px;
  }

  @media only screen and (max-width: 800px) {
    margin-right: 0px !important;
    margin-bottom: 10px;
  }
`;

const DisplayBox = (props) => {
  return (
    <StyledDisplayBox className={classes["display--box"]}>
      {props.children}
    </StyledDisplayBox>
  );
};

export default DisplayBox;
