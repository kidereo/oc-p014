import React from 'react';
import {useContext} from 'react';
import Employee from './Employee';
import {AppContext} from '../context/AppState';

/**
 * Create a collection of employees as a table.
 *
 * @returns {*}
 * @constructor
 */
const EmployeeList = () => {
    const {employees} = useContext(AppContext);

    return (
        <>
            <h2>
                Current Employees: {employees.length}
            </h2>
            <table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Home State</th>
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
            </table>
        </>
    )
};

export default EmployeeList;