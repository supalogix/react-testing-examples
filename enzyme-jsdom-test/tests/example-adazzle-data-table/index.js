import React from "react"
import Example from "../../example"
import {mount} from "enzyme"
import ReactDataGrid from "react-data-grid"
import {expect} from "chai"

export default
({
    HasASingleRow
})

function HasASingleRow() {
    const example = mount(<Example />);
    const columns=
    [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' },
        { key: 'count', name: 'Count' } 
    ];
    const rows = 
    [
        {
            id: "1234",
            title: "Title 1234",
            count: "1"
        }
    ];
    const rowGetter = (i) => rows[i];
    const expected = mount(
        <ReactDataGrid
            columns={columns}
            rowGetter={rowGetter}
            rowsCount={rows.length}
            minHeight={500} />
    );

    expect(example.html())
        .to
        .equal(expected.html());

}