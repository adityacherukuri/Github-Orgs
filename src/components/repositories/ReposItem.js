import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ReposItem = ({ repo, login }) => {
  return (
    <h3 className="card" style={{ fontSize: "0.9rem" }}>
      {/* <a href={repo.html_url}>{repo.name}</a> */}
      <Link to={`/orgs/${login}/${repo.name}`}>{repo.name}</Link>
    </h3>
  );
};

ReposItem.prototypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
