import styled from "styled-components";

// const Card = (props) => {
//   return <div className={classes.card}>{props.children}</div>;
// };

const Cards = styled.div`
  display: flex;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media only screen and (max-width: 800px) {
    margin-right: 0px !important;
    margin-bottom: 10px;
  }
`;

const Card = (props) => {
  return <Cards>{props.children}</Cards>;
};

export default Card;
