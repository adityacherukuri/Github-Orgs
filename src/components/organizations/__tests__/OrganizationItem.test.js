import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import OrganizationItem from "../OrganizationItem";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders organization data", async () => {
  const fakeOrganization = {
    avatar_url: "https://test.com/avatar.png",
  };

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(
      <BrowserRouter>
        <OrganizationItem organization={fakeOrganization} />
      </BrowserRouter>,
      container
    );
  });

  const renderedSrc = container.querySelector("img").getAttribute("src");
  expect(renderedSrc).toBe(fakeOrganization.avatar_url);
});
