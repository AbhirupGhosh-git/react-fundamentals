import classes from "./DisplayBox.module.css";

const DisplayBox = (props) => {
  return <div className={classes["display--box"]}>{props.children}</div>;
};

export default DisplayBox;
