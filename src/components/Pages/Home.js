import CardItem from "../CardItems/CardItem";
import Chart from "../UI/Chart";
import "../../App.css";

import React from "react";

const Home = (props) => {
  return (
    <div>
      <div className="displayFlex">
        <span className="dashboard-title">🏠 Dashboard</span>
        <span>ℹ Overview</span>
      </div>
      <div className="displayFlex">
        <CardItem
          sales={props.dummy_data.salesReport}
          orders={props.dummy_data.orderReport}
          visitors={props.dummy_data.visitorReport}
        />
      </div>

      <div className="displayFlex">
        <Chart
          barChartData={props.dummy_data.visitSalesReport}
          pieChartData={props.dummy_data.trafficSource}
        />
      </div>
    </div>
  );
};

export default Home;
