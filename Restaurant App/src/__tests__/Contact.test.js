import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


test("Should load Contact us component", ()=> {

    render(<ContactUs/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

})

test("Should load Buttton inside Contact us component", ()=> {

    render(<ContactUs/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("Should load Submit Text inside Contact us component", ()=> {

    render(<ContactUs/>);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
   })

   test("Should find number of input components inside Contact us component", ()=> {

    render(<ContactUs/>);

    const inputBoxCount = screen.getAllByRole("textbox")

    expect(inputBoxCount.length).toBe(2);
   })