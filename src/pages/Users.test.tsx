import { render, screen } from "@testing-library/react";
import React from "react";
import Users from "./Users";

test("renders learn react link", () => {
	render(<Users />);
	const linkElement = screen.getByText(/Users Table/i);
	expect(linkElement).toBeInTheDocument();
});
