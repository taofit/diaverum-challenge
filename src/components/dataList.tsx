import React, { useMemo, useState, useEffect } from "react";
import DataTable from "./dataTable";
import { fields } from '../types';
import { LabResult } from '../app.styles';

const DataList = ({content}) => {
    const columnsFields = fields.map(field => ({Header: field.replace("_", " "), accessor: field}));

    const columns = useMemo(
        () => columnsFields,
        []
    );

    return (
        <div className="App">
            <LabResult>lab results</LabResult>
            {!!content.length && <DataTable columns={columns} data={content} />}
        </div>
    );
}

export default DataList;