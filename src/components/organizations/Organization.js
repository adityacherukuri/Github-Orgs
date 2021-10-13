import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import Repos from "../repositories/Repos";

import GithubContext from "../../context/github/githubContext";

const Organization = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const {
    getOrganization,
    loading,
    organization,
    repos,
    getOrganizationRepos,
  } = githubContext;

  useEffect(() => {
    getOrganization(match.params.login);
    getOrganizationRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { name, avatar_url, description, blog, login, html_url } = organization;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back
        </Link>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt={name}
              style={{ width: "150px" }}
            />
          </div>
          <div>
            {description && (
              <Fragment>
                <h3>Description</h3>
                <p>{description}</p>
              </Fragment>
            )}
            <a
              href={html_url}
              className="btn btn-dark my-1"
              target="_blank"
              rel="noreferrer"
            >
              Github profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Organization Name: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Blog: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <h3 style={{ marginTop: "30px" }}>
          Public Repos: {repos.length === 0 && repos.length}
        </h3>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default Organization;
