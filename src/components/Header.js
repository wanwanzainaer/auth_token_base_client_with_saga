import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";

const Header = props => {
  const renderHeader = () => {
    if (props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </div>
      );
    }
  };
  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderHeader()}
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { authenticated: auth.authenticated };
};
export default connect(mapStateToProps)(Header);
