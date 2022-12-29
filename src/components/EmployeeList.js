import React from 'react';
import {useContext, useState, useCallback} from 'react';
import Employee from './Employee';
import {AppContext} from '../context/AppState';
import {DataGrid, gridClasses, GridActionsCellItem} from '@mui/x-data-grid';
import {IconDelete} from "../assets/svg-icons";
import {alpha, styled} from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * Style a striped data grid.
 * @type {number}
 * @type {StyledComponent<Omit<Partial<DataGridPropsWithDefaultValues> & DataGridPropsWithComplexDefaultValueBeforeProcessing & DataGridPropsWithoutDefaultValue<R>, DataGridForcedPropsKey> & {pagination?: true} & React.RefAttributes<HTMLDivElement> & MUIStyledCommonProps<Theme>, {}, {}>}
 */
const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({theme}) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

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
        {field: 'id', headerName: 'ID', width: 60},
        {field: 'firstName', headerName: 'First Name'},
        {field: 'lastName', headerName: 'Last Name'},
        {field: 'startDate', headerName: 'Start Date', type: 'date'},
        {field: 'department', headerName: 'Department'},
        {field: 'birthDate', headerName: 'Date of Birth', type: 'date'},
        {field: 'homeState', headerName: 'State', width: 60},
        {field: 'zipCode', headerName: 'Zip Code'},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: ({id}) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
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
            <h2>
                TOTAL EMPLOYEES: {employees.length}
            </h2>

            <div className="employee-list-table">
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


            {/* <table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Home State</th>
                    <th>Zip Code</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee) => (
                        <Employee key={employee.id} employee={employee}/>
                    ))
                }
                </tbody>
            </table>*/}
        </div>
    )
};

export default EmployeeList;