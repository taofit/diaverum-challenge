import React, { useMemo, useState, useEffect } from "react";
import DataTable from "./dataTable";
import { fields } from './types';

const DataList = ({content}) => {
    const columnsFields = fields.map(field => ({Header: field.replace("_", " "), accessor: field}));

    const columns = useMemo(
        () => columnsFields,
        []
    );

    return (
        <div className="App">
            <h2>lab results</h2>
            {!!content.length && <DataTable columns={columns} data={content} />}
        </div>
    );
}

export default DataList;