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

  it("renders correctly when signed out", () => {
    (useSession as jest.Mock).mockReturnValueOnce([false, false]);

    const arg: MealPlan[] = [];
    render(<Home mealplans={arg} />);
    expect(screen.getByText("Not signed in"));
  });
});
