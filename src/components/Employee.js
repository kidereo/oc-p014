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
 * @returns {*}
 * @constructor
 */
const Employee = ({employee: {id, firstName, lastName, birthDate, department}}) => {
    const {deleteEmployee} = useContext(AppContext);

    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{birthDate}</td>
            <td>{department}</td>
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