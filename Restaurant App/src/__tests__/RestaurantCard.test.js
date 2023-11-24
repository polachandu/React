import RestaurantCard from "../components/RestaurantCard";
import {render} from "@testing-library/react"

it("Should have Restaurant Component with props Data", ()=> {

    render(<RestaurantCard/>);
})