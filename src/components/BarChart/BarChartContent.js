import BarChart from "./BarChart";
import classes from "./BarChartContent.module.css";

const BarChartContent = (props) => {
  return (
    <div className={classes.barChart}>
      <div className={classes["barChart--header"]}>
        <span className={classes["barChart--title"]}>
          Visit and Sales Statistics
        </span>
        <span>
          <span className={classes["barChart--index"]}>
            <span className={`${classes["indexBox"]} ${classes["chn"]}`}></span>
            CHN
          </span>
          <span className={classes["barChart--index"]}>
            <span className={`${classes["indexBox"]} ${classes["usa"]}`}></span>
            USA
          </span>
          <span className={classes["barChart--index"]}>
            <span className={`${classes["indexBox"]} ${classes["ind"]}`}></span>
            IND
          </span>
        </span>
      </div>

      <div className={classes["barChart--content"]}>
        {Object.entries(props.visitorData).map((visitorDataItem) => {
          return <BarChart key={Math.random()} monthlyData={visitorDataItem} />;
        })}
      </div>
    </div>
  );
};

export default BarChartContent;
