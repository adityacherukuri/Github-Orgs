import React from "react";
import PropTypes from "prop-types";

const ReposItem = ({ repo }) => {
  return (
    <h3 className="card" style={{ fontSize: "0.9rem" }}>
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
  );
};

ReposItem.prototypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
