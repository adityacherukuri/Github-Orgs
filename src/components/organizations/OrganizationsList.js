import React, { useContext } from "react";
import Spinner from "../Spinner";
import OrganizationItem from "./OrganizationItem";

import GithubContext from "../../context/github/githubContext";

const OrganizationsList = () => {
  const githubContext = useContext(GithubContext);

  const { loading, organizations } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={orgStyle}>
        {organizations.map((org) => (
          <OrganizationItem key={org.id} organization={org} />
        ))}
      </div>
    );
  }
};

const orgStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default OrganizationsList;
