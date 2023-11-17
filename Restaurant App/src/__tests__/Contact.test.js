import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react"


test("Should load Contact us component", ()=> {

    render(<ContactUs/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})