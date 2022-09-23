import Table from "../Table/Table";

const Progress = (props) => {
  return (
    <div>
      <div className="displayFlex">
        <span className="dashboard-title">🧾 Project Status</span>
        <span>ℹ Overview</span>
      </div>
      <Table projectStatus={props.test_data} />
    </div>
  );
};

export default Progress;
