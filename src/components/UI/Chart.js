import DisplayBox from "./DisplayBox";
import BarChartContent from "../BarChart/BarChartContent";
import PieChartContent from "../PieChart/PieChartContent";

const Chart = (props) => {
  return (
    <>
      <DisplayBox>
        <BarChartContent visitorData={props.barChartData} />
      </DisplayBox>
      <DisplayBox>
        <PieChartContent pieChartData={props.pieChartData} />
      </DisplayBox>
    </>
  );
};

export default Chart;
