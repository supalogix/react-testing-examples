import React from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ExampleAdazzleDataTable from "./tests/example-adazzle-data-table"

Enzyme.configure({ adapter: new Adapter() });

describe("Example Adazzle Data Table", () => 
{
    it("has a single row", 
        ExampleAdazzleDataTable.HasASingleRow)
})