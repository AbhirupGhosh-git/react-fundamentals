import styled from "styled-components";

const Responsivestyledbar = styled.div`
  .navbar {
    background-color: antiquewhite;
    min-height: 100vh;
    padding: 10px 20px;
    width: 100%;

    @media only screen and (max-width: 700px) {
      padding: 5px 10px;
    }
  }

  .navbar--visible {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar--invisible {
    display: none;
  }

  .styledMenu {
    list-style: none;
    text-align: center;
  }

  .companyName {
    color: palevioletred;
    font-size: 30px;
    font-weight: bold;
    @media only screen and (max-width: 700px) {
      font-size: 15px;
    }
  }

  .userName {
    margin: 30px 0;
    font-size: 20px;
    display: flex;
    @media only screen and (max-width: 700px) {
      margin: 15px 0;
      font-size: 10px;
    }
  }

  .userRole {
    font-size: 15px;
    @media only screen and (max-width: 700px) {
      font-size: 8px;
    }
  }

  .profilePicture {
    font-size: 38px;
    margin-right: 10px;
    align-self: center;
    @media only screen and (max-width: 700px) {
      font-size: 20px;
      margin-right: 5px;
    }
  }

  .menuItem {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 18px;
    transition: all 0.5s;
    width: 100%;

    @media only screen and (max-width: 700px) {
      font-size: 12px;
      margin-right: 5px;
    }
  }

  .menuItem:hover {
    color: palevioletred;
    transform: scale(1.2);
  }

  .selected {
    color: palevioletred;
    font-weight: bold;
    font-size: 20px;
    @media only screen and (max-width: 700px) {
      font-size: 14px;
    }
  }
`;

const NavBar = (props) => {
  return (
    <Responsivestyledbar>
      <div className={`navbar ${props.className}`}>
        <ul className="styledMenu">
          <li className="companyName">🌏 MyApp</li>
          <li className="userName">
            <span className="profilePicture">🤖</span>
            <span>
              Abhirup Ghosh
              <br /> <span className="userRole">Developer</span>
            </span>
          </li>
          <li
            className={`menuItem ${props.selectedOption && "selected"}`}
            onClick={props.displayDashboard}
          >
            <span>Dashboard</span>
            <span>🏠</span>
          </li>
          <li className="menuItem">
            <span>Calender</span>
            <span>📅</span>
          </li>
          <li
            className={`menuItem ${!props.selectedOption && "selected"}`}
            onClick={props.displayProgress}
          >
            <span>Project Status</span>
            <span>🧾</span>
          </li>
        </ul>
      </div>
    </Responsivestyledbar>
  );
};

export default NavBar;
