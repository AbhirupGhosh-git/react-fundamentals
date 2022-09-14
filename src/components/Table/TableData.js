import classes from "./TableData.module.css";

const TableData = (props) => {
  return (
    <tr>
      <td>{props.itemData.name.slice(-1)}</td>
      <td>{props.itemData.name}</td>
      <td>{props.itemData.dueDate}</td>
      <td>
        <div className={classes.progressBar}>
          <div
            className={classes["progressBar--inner"]}
            style={{
              width: `${props.itemData.progress}`,
              backgroundColor: `${props.itemData.bgColor}`,
            }}
          ></div>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
