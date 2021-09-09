/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { MealPlan } from ".prisma/client";
import { useSession } from "next-auth/client";
import { Session } from "next-auth";

jest.mock("next-auth/client");

describe("Home", () => {
  const mealplanOne: MealPlan = {name: "Knife Fork of the Spoon River", id: 234, description: "the gnar-gnar", ownerId: "sue"};
  const mealplanTwo: MealPlan = {name: "peaceful family campout", id: 345, description: "park and bloat", ownerId: "tom"};
  const argZero: MealPlan[] = [];
  const argOne: MealPlan[] = [mealplanOne];
  const argTwo: MealPlan[] = [mealplanOne, mealplanTwo];
  const sessionMock: Session = {
    user: {
      email: null,
      image: "http://www.bensay.org/gallery/v/grandcanyon/toppicks/1711.JPG",
      name: "testuser"
    },
    accessToken: "123abc",
    expires: "2022-10-08T16:50:26.863Z"
  };

  it("renders a footer", () => {
    (useSession as jest.Mock).mockReturnValueOnce([false, false]);

    render(<Home mealplans={argZero} />);
    const footer = screen.getByText(/.*Chris Jones and Lindsay Marean/);
    expect(footer).toBeInTheDocument();
  });

  // model for session tests: https://github.com/nextauthjs/next-auth/issues/775

  it("renders correctly when signed out", () => {
    (useSession as jest.Mock).mockReturnValueOnce([false, false]);

    render(<Home mealplans={argZero} />);
    expect(screen.getByText("Not signed in"));
  });

  it("renders correctly when signed in", () => {
    (useSession as jest.Mock).mockReturnValueOnce([sessionMock, false,]);
    render(<Home mealplans={argZero} />);
    expect(screen.getByText("Signed in as testuser"));
  });

  it("displays one mealplan", () => {
    (useSession as jest.Mock).mockReturnValueOnce([sessionMock, false,]);
    render(<Home mealplans={argOne} />);
    expect(screen.getByText("Knife Fork of the Spoon River"));
  });

  it("displays two mealplans", () => {
    (useSession as jest.Mock).mockReturnValueOnce([sessionMock, false,]);
    render(<Home mealplans={argTwo} />);
    expect(screen.getByText("Knife Fork of the Spoon River"));
    expect(screen.getByText("peaceful family campout"));
    expect(screen.queryByText("no such thing") === null);
  });

});
