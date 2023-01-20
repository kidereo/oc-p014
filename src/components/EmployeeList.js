import React, {lazy, Suspense} from 'react';
import {useContext, useState} from 'react';
//import StripedDataGrid from './StripedDataGrid'; //Direct import will decrease Lighthouse performance score
import {AppContext} from '../context/AppState';
import {GridActionsCellItem} from '@mui/x-data-grid';

//Lazy loading will improve Lighthouse 'Eliminate render-blocking resources' metric.
const StripedDataGrid = lazy(() => import('./StripedDataGrid'));
const DeleteForeverOutlinedIcon = lazy(() => import('@mui/icons-material/DeleteForeverOutlined'));
const renderLoader = () => <p>Please wait while the data is loading...</p>;

/**
 * Create a collection of employees as a striped data grid.
 *
 * @returns {*}
 * @constructor
 */
const EmployeeList = () => {
    const {employees, deleteEmployee} = useContext(AppContext);
    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'firstName', headerName: 'First Name'},
        {field: 'lastName', headerName: 'Last Name'},
        {field: 'startDate', headerName: 'Start Date', type: 'date'},
        {field: 'department', headerName: 'Department', minWidth: 150},
        {field: 'birthDate', headerName: 'Date of Birth', type: 'date'},
        {field: 'street', headerName: 'Street', minWidth: 200},
        {field: 'city', headerName: 'City', minWidth: 200},
        {field: 'homeState', headerName: 'State'},
        {field: 'zipCode', headerName: 'Zip Code'},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: ({id}) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteForeverOutlinedIcon/>}
                        label="Delete"
                        onClick={() => deleteEmployee(id)}
                        color="error"
                    />,
                ]
            }
        }
    ];

    return (
        <div className="employee-list">
            <Suspense fallback={renderLoader()}>

                <h2>
                    TOTAL EMPLOYEES: {employees.length}
                </h2>

                <div className="employee-list-grid">
                    <StripedDataGrid
                        rows={employees}
                        columns={columns}
                        density={'standard'}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                        }
                        pageSize={pageSize}
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    />
                </div>

            </Suspense>
        </div>
    )
};

export default EmployeeList;