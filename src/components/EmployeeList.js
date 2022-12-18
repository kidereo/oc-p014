import React from 'react';
import Employee from './Employee'


const EmployeeList = () => {
    const employees = [
        {id: 1, firstName: "James", lastName: "Bond"},
        {id: 2, firstName: "Rosa", lastName: "Klebb"},
        {id: 3, firstName: "Auric", lastName: "Goldfinger"}
    ];

    return (
        <table>
            <thead>
            <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
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
    )
};

export default EmployeeList;