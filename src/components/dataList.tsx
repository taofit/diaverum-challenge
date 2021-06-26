import React, { useMemo } from 'react';
import DataTable from './dataTable';
import { fields } from '../types';
import { LabResult, TableWrapper } from '../app.styles';

const DataList = ({content}) => {
    const columnsFields = fields.map(field => ({Header: field.replace("_", " "), accessor: field}));

    const columns = useMemo(
        () => columnsFields,
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