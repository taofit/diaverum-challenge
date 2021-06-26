import React, { useMemo } from 'react';
import DataTable from './dataTable';
import { fields } from '../types';
import { LabResult, TableWrapper } from '../app.styles';

const DataList = ({content}) => {
    const columns = useMemo(
        () => fields.map(field => ({Header: field.replace("_", " "), accessor: field})),
        []
    );

    return (
        <>
            <LabResult>lab results</LabResult>
            {
                !!content.length && <TableWrapper>
                    <DataTable columns={columns} data={content} />
                </TableWrapper>
            }
        </>
    );
}

export default DataList;