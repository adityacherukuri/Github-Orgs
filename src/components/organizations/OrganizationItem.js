import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrganizationItem = ({
  organization: { login, avatar_url, html_url },
}) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt={login}
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/orgs/${login}`} className="btn-dark btn-sm my-1">
          View Profile
        </Link>
      </div>
    </div>
  );
};

OrganizationItem.propTypes = {
  organization: PropTypes.object.isRequired,
};

export default OrganizationItem;
