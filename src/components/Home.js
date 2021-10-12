import React, { Fragment } from "react";
import Search from "./Search";
import OrganizationsList from "./organizations/OrganizationsList";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <OrganizationsList />
    </Fragment>
  );
};

export default Home;
