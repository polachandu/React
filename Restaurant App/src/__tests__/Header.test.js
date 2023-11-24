import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../components/HeaderComponent";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load a header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

//   const loginButton = screen.getByRole("button");
// const loginButton = screen.getByText("LOGIN");
const loginButton = screen.getByRole("button",{ name: "LOGIN" })   //BEST WAY to describe
  expect(loginButton).toBeInTheDocument();
});


it("Should change from LOGIN button to LOGOUT on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

//   const loginButton = screen.getByRole("button");
// const loginButton = screen.getByText("LOGIN");
const loginButton = screen.getByRole("button",{ name: "LOGIN" })   //BEST WAY to describe
fireEvent.click(loginButton);
const logoutButton = screen.getByRole("button",{ name: "LOGOUT" }) 
expect(logoutButton).toBeInTheDocument();
});