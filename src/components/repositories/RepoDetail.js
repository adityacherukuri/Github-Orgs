import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import GithubContext from "../../context/github/githubContext";

const RepoDetail = ({ repo, match }) => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  let current = match.params.name;
  let selected = repos.find((r) => r.name === current);
  console.log(selected);

  return (
    <Fragment>
      <Link to={`/orgs/${match.params.login}`} className="btn btn-light">
        Back
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={selected.owner.avatar_url}
            className="round-img"
            alt={selected.name}
            style={{ width: "150px" }}
          />
        </div>
        <div>
          <ul>
            <li>
              {selected.hasOwnProperty("name") && (
                <Fragment>
                  <strong>Repository Name: </strong>
                  {selected.name}
                </Fragment>
              )}
            </li>
            <li>
              {selected.watchers >= 0 && (
                <Fragment>
                  <strong>Watchers: </strong>
                  {selected.watchers}
                </Fragment>
              )}
            </li>
            <li>
              {selected.forks >= 0 && (
                <Fragment>
                  <strong>Forks: </strong>
                  {selected.forks}
                </Fragment>
              )}
            </li>
            <li>
              {selected.open_issues >= 0 && (
                <Fragment>
                  <strong>Open Issues: </strong>
                  {selected.open_issues}
                </Fragment>
              )}
            </li>
            <li>
              {selected.license !== null && (
                <Fragment>
                  <strong>License: </strong>
                  {selected.license.name}
                </Fragment>
              )}
            </li>
          </ul>
          <div>
            <a
              href={selected.html_url}
              className="btn btn-dark my-1"
              target="_blank"
              rel="noreferrer"
            >
              See in GitHub
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RepoDetail;
