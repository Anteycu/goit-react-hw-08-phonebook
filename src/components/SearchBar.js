import React from "react";
import UserMenu from "./UserMenu/UserMenu";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav/AuthNav";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const SearchBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(SearchBar);
