import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={`${classes.navbar} ${classes[props.className]}`}>
      <ul className={classes.navMenu}>
        <li className={classes.companyName}>🌏 MyApp</li>
        <li className={classes.userName}>
          <span className={classes.profilePicture}>🤖</span>
          <span>
            Abhirup Ghosh
            <br /> <span className={classes.userRole}>Developer</span>
          </span>
        </li>
        <li
          className={`${classes["menuItem"]} ${
            props.selectedOption && classes.selected
          }`}
          onClick={props.displayDashboard}
        >
          <span>Dashboard</span>
          <span>🏠</span>
        </li>
        <li className={classes.menuItem}>
          <span>Calender</span>
          <span>📅</span>
        </li>
        <li
          className={`${classes["menuItem"]} ${
            !props.selectedOption && classes.selected
          }`}
          onClick={props.displayProgress}
        >
          <span>Project Status</span>
          <span>🧾</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
