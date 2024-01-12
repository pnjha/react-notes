import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../store/app-store";

describe("header", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  test("should render header component with a login button", () => {
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

    const loginButton1 = screen.getByText("Login");
    expect(loginButton1).toBeInTheDocument();

    const loginButton2 = screen.getByRole("button", { name: "Login" });
    expect(loginButton2).toBeInTheDocument();
  });

  test("should render header component with empty cart", () => {
    const cartItems = screen.getByText("Cart 0");
    expect(cartItems).toBeInTheDocument();

    const cartItems1 = screen.getByText(/Cart/);
    expect(cartItems1).toBeInTheDocument();
  });
  test("should change login to logout on click", () => {
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });
});
