import React, { useContext, useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import AlertContext from "../alert/alertContext";

import {
  SEARCH_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_REPOS,
  CLEAR_ORGANIZATIONS,
  SET_LOADING,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const alertContext = useContext(AlertContext);

  const initialState = {
    organizations: [],
    organization: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchOrganizations = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const data = response.data.items;
    const onlyOrgs = data.filter((f) => f.type === "Organization");

    if (onlyOrgs.length === 0) {
      alertContext.setAlert("No organization found", "light");
    }

    dispatch({
      type: SEARCH_ORGANIZATIONS,
      payload: onlyOrgs.length > 0 ? onlyOrgs : [],
    });
  };

  const getOrganization = async (organizationName) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/orgs/${organizationName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_ORGANIZATION,
      payload: response.data,
    });
  };

  const getOrganizationRepos = async (organizationName) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/orgs/${organizationName}/repos?per_page=100&sort=updated&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  const clearOrganizations = () => {
    dispatch({
      type: CLEAR_ORGANIZATIONS,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        organizations: state.organizations,
        organization: state.organization,
        repos: state.repos,
        loading: state.loading,
        searchOrganizations,
        clearOrganizations,
        getOrganization,
        getOrganizationRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
