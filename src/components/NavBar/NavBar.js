import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Responsivestyledbar = styled.div`
  height: 100%;
  .navbar {
    background-color: antiquewhite;
    padding: 10px 20px;
    width: 100%;

    @media only screen and (max-width: 800px) {
      padding: 5px 10px;
    }
  }

  .navbar--visible {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .navbar--invisible {
    display: none;
    height: 100%;
  }

  .styledMenu {
    list-style: none;
    text-align: center;
  }

  .companyName {
    color: palevioletred;
    font-size: 30px;
    font-weight: bold;
    @media only screen and (max-width: 800px) {
      font-size: 15px;
    }
  }

  .userName {
    margin: 30px 0;
    font-size: 20px;
    display: flex;
    @media only screen and (max-width: 800px) {
      margin: 15px 0;
      font-size: 10px;
    }
  }

  .userRole {
    font-size: 15px;
    @media only screen and (max-width: 800px) {
      font-size: 8px;
    }
  }

  .profilePicture {
    font-size: 38px;
    margin-right: 10px;
    align-self: center;
    @media only screen and (max-width: 800px) {
      font-size: 18px;
      margin-right: 5px;
    }
  }

  .navLinks,
  &:visited {
    color: #00b33c;
    text-decoration: none;
    transition: all 0.5s;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    font-size: 18px;
    width: 100%;

    &:hover {
      color: palevioletred;
      transform: scale(1.2);
    }

    @media only screen and (max-width: 800px) {
      font-size: 12px;
      margin-right: 5px;
    }
  }

  .active {
    color: palevioletred;
    font-weight: bold;
    font-size: 20px;
    /* transition: all 0.5s; */
    @media only screen and (max-width: 800px) {
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
          <li>
            <NavLink className="navLinks" to="/" end>
              <span>Dashboard</span>
              <span>🏠</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" to="/Calendar">
              <span>Calender</span>
              <span>📅</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" to="/progress">
              <span>Project Status</span>
              <span>🧾</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Responsivestyledbar>
  );
};

export default NavBar;
