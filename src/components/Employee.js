import React from 'react';

const Employee = ({employee: {id, firstName, lastName}}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>
                <div>
                    <i className='fas fa-edit'></i>
                    <i className='fas fa-trash'></i>
                </div>
            </td>
        </tr>


    )
};

export default Employee;