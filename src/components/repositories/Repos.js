import React, { useContext } from "react";
import ReposItem from "./ReposItem";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

import GithubContext from "../../context/github/githubContext";

const Repos = ({ repos }) => {
  const githubContext = useContext(GithubContext);
  const { loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="wrapper">
        {repos.map((repo) => (
          <ReposItem repo={repo} key={repo.id} />
        ))}
      </div>
    );
  }
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
