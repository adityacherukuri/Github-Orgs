import React, { Fragment, useContext } from "react";
import ReposItem from "./ReposItem";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

import GithubContext from "../../context/github/githubContext";

const Repos = ({ repos, login }) => {
  const githubContext = useContext(GithubContext);
  const { loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className="wrapper">
          {repos.map((repo) => (
            <ReposItem repo={repo} login={login} key={repo.id} />
          ))}
        </div>
      </Fragment>
    );
  }
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
