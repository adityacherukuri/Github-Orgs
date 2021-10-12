import React from "react";
import ReposItem from "./ReposItem";
import PropTypes from "prop-types";

function Repos({ repos }) {
  return (
    <div className="wrapper">
      {repos.map((repo) => (
        <ReposItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
