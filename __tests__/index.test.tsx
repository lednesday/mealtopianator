/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { MealPlan } from ".prisma/client";
import { useSession } from "next-auth/client";

jest.mock("next-auth/client");

describe("Home", () => {
  it("renders a footer", () => {
    (useSession as jest.Mock).mockReturnValueOnce([false, false]);

    const arg: MealPlan[] = [];
    render(<Home mealplans={arg} />);
    const footer = screen.getByText(/.*Chris Jones and Lindsay Marean/);
    expect(footer).toBeInTheDocument();
  });

  // model for session tests: https://github.com/nextauthjs/next-auth/issues/775

  it("renders correctly when signed out", () => {
    (useSession as jest.Mock).mockReturnValueOnce([false, false]);

    const arg: MealPlan[] = [];
    render(<Home mealplans={arg} />);
    expect(screen.getByText("Not signed in"));
  });

  it("renders correctly when signed in", () => {
    (useSession as jest.Mock).mockReturnValueOnce([
      {
        user: {
          email: null,
          image: "http://www.bensay.org/gallery/v/grandcanyon/toppicks/1711.JPG",
          name: "testuser"
        },
        accessToken: "123abc",
        expires: "2022-10-08T16:50:26.863Z"
      },
      false,
    ]);
    const arg: MealPlan[] = [];
    render(<Home mealplans={arg} />);
    expect(screen.getByText("Signed in as testuser"));
  });

});
