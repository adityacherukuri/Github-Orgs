import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleInput = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter organization name...", "light");
    } else {
      githubContext.searchOrganizations(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleInput}
          placeholder="Search Organizations..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.organizations.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearOrganizations}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
