import PieChart from "./PieChart";

import classes from "./PieChartContent.module.css";

const PieChartContent = (props) => {
  return (
    <>
      <p>Traffic Sources</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PieChart trafficSourcePercentage={props.pieChartData} />
      </div>
      <div className={classes.content}>
        <p className={classes.flexDisplay}>
          <span className={`${classes.indexBox} ${classes.sm}`}></span>
          <span className={classes.rightMargin}>Social Media</span>
          <span>{props.pieChartData.socialMedia}</span>
        </p>
        <p className={classes.flexDisplay}>
          <span className={`${classes.indexBox} ${classes.se}`}></span>
          <span className={classes.rightMargin}>Search Engines</span>
          <span>{props.pieChartData.searchEngines}</span>
        </p>
        <p className={classes.flexDisplay}>
          <span className={`${classes.indexBox} ${classes.dc}`}></span>
          <span className={classes.rightMargin}>Direct Contact</span>
          <span>{props.pieChartData.directContact}</span>
        </p>
      </div>
    </>
  );
};

export default PieChartContent;
