import React from "react"
import ReactDataGrid from "react-data-grid"

export default class Example extends React.Component 
{
    constructor(props, context) 
    {
        super(props, context);
        this._columns = 
        [
            { key: 'id', name: 'ID' },
            { key: 'title', name: 'Title' },
            { key: 'count', name: 'Count' } 
        ];

        this.state = null;
        let rows = 
        [
            {
                id: "1234",
                title: "Title 1234",
                count: "1"
            }
        ];

        this._rows = rows;

        const self = this;
        this.rowGetter = (i) => 
        {
            return self._rows[i];
        };
    }
  
    rowGetter(i) {
      return this._rows[i];
    };
  
    render() {
        return  (
            <ReactDataGrid
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this._rows.length}
                minHeight={500} />);
    }
}