import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import CardItem from "./components/CardItems/CardItem";
import Chart from "./components/UI/Chart";
import Table from "./components/Table/Table";

import "./App.css";

const dummy_data = {
  employees: { name: "Test", designation: "Test" },
  salesReport: {
    weeklySales: 15000,
    increasedPercent: 60,
  },
  orderReport: {
    weeklySales: 45000,
    increasedPercent: 10,
  },
  visitorReport: {
    weeklySales: 95000,
    decreasedPercent: 60,
  },
  visitSalesReport: {
    Jan: { China: 40, USA: 10, Ind: 30 },
    Feb: { China: 18, USA: 35, Ind: 70 },
    Mar: { China: 50, USA: 14, Ind: 52 },
    Apr: { China: 37, USA: 75, Ind: 77 },
    May: { China: 22, USA: 61, Ind: 92 },
    Jun: { China: 10, USA: 49, Ind: 67 },
  },
  trafficSource: {
    socialMedia: "20%",
    searchEngines: "60%",
    directContact: "20%",
  },
};

const test_data = {
  projectStatus: [
    {
      name: "Test2",
      dueDate: "6/12/2022",
      progress: "50%",
      bgColor: "#00cc99",
    },
    {
      name: "Test3",
      dueDate: "4/11/2022",
      progress: "60%",
      bgColor: "#ff6666",
    },
    {
      name: "Test4",
      dueDate: "2/10/2022",
      progress: "90%",
      bgColor: "#ffd11a",
    },
    { name: "Test5", dueDate: "9/9/2022", progress: "70%", bgColor: "#cc00cc" },
    {
      name: "Test6",
      dueDate: "7/11/2022",
      progress: "60%",
      bgColor: "#0099ff",
    },
  ],
};

function App() {
  const [isVisible, setIsVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState(true);

  const switchNavbar = () => {
    setIsVisibility(!isVisible);
  };

  let pageTitle = "";
  const selectDashboardHandler = () => {
    setSelectedOption(true);
  };

  const selectProgressHandler = () => {
    setSelectedOption(false);
  };

  let navWidth = "navbar--invisible";
  if (isVisible) {
    navWidth = "navbar--visible";
  } else {
    navWidth = "navbar--invisible";
  }

  let content = "";
  if (selectedOption) {
    pageTitle = "🏠 Dashboard";
    content = (
      <>
        <div className="displayFlex">
          <CardItem
            sales={dummy_data.salesReport}
            orders={dummy_data.orderReport}
            visitors={dummy_data.visitorReport}
          />
        </div>

        <div className="displayFlex">
          <Chart
            barChartData={dummy_data.visitSalesReport}
            pieChartData={dummy_data.trafficSource}
          />
        </div>
      </>
    );
  } else {
    pageTitle = "🧾 Project Status";
    content = <Table projectStatus={test_data.projectStatus} />;
  }

  return (
    <div className="webpage">
      <NavBar
        selectedOption={selectedOption}
        displayDashboard={selectDashboardHandler}
        displayProgress={selectProgressHandler}
        className={navWidth}
      />

      <main className="content">
        <div className="displayFlex">
          <span className="navIcon" onClick={switchNavbar}>
            &#9776;
          </span>
        </div>

        <div className="displayFlex">
          <span>{pageTitle}</span>
          <span>ℹ Overview</span>
        </div>

        {content}
      </main>
    </div>
  );
}

export default App;
