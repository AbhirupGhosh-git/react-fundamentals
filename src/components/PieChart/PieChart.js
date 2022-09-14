import classes from "./PieChart.module.css";

const PieChart = (props) => {
  const socialMedia = Math.round(
    3.6 * Number(props.trafficSourcePercentage.socialMedia.slice(0, 2))
  );

  const searchEngines = Math.round(
    3.6 * Number(props.trafficSourcePercentage.searchEngines.slice(0, 2))
  );

  const directContact = Math.round(
    3.6 * Number(props.trafficSourcePercentage.directContact.slice(0, 2))
  );

  const gradient1 = socialMedia;
  const gradient2 = gradient1 + searchEngines;
  const gradient3 = gradient2 + directContact;

  return (
    <div
      className={classes.pieChart}
      style={{
        backgroundImage: `conic-gradient(#80dfff 0deg, #d24dff ${gradient1}deg, #33ffad ${gradient1}deg, #00995c ${gradient2}deg, #ff9966 ${gradient2}deg, #ff4d88 ${gradient3}deg)`,
      }}
    >
      <span className={classes["pieChart--cutout"]}></span>
    </div>
  );
};

export default PieChart;
