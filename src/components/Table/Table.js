import TableData from "./TableData";
import classes from "./Table.module.css";

const Table = (props) => {
  return (
    <div className={classes.tableBox}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {props.projectStatus.map((item) => {
            return <TableData key={Math.random()} itemData={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
