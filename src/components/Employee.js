import React from 'react';
import {useContext} from 'react';
import {AppContext} from "../context/AppState";

/**
 * A table row for each employee.
 *
 * @param id
 * @param firstName
 * @param lastName
 * @param birthDate
 * @param department
 * @returns {*}
 * @constructor
 */
const Employee = ({employee: {id, firstName, lastName, birthDate, startDate, department}}) => {
    const {deleteEmployee} = useContext(AppContext);

    const formatDate = (date) => {
        const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
        return new Date(date).toLocaleDateString([], options);
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{formatDate(startDate)}</td>
            <td>{department}</td>
            <td>{formatDate(birthDate)}</td>
            <td>
                <div>
                    {/*<i className='fas fa-edit'></i>*/}
                    <i className='fas fa-trash' onClick={() => deleteEmployee(id)}></i>
                </div>
            </td>
        </tr>
    )
};

export default Employee;