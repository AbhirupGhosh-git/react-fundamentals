import classes from "./BarChart.module.css";

const BarChart = (props) => {
  return (
    <div className={classes["barChart--item"]}>
      <div className={classes["barChart--inner"]}>
        <div
          className={classes["barChart--fill"]}
          style={{
            height: `${props.monthlyData[1].China}%`,
            backgroundColor: "#9900cc",
          }}
        ></div>
        <div
          className={classes["barChart--fill"]}
          style={{
            height: `${props.monthlyData[1].USA}%`,
            backgroundColor: "#00aaff",
          }}
        ></div>
        <div
          className={classes["barChart--fill"]}
          style={{
            height: `${props.monthlyData[1].Ind}%`,
            backgroundColor: "#ff6699",
          }}
        ></div>
      </div>
      <div className={classes["barChart--label"]}>{props.monthlyData[0]}</div>
    </div>
  );
};

export default BarChart;
