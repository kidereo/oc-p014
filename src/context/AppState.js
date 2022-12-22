import React, {createContext, useReducer, useState} from "react";
import {appReducer} from './AppReducer';
import {toast} from 'react-toastify';

const initialState = {
    employees: [
        {
            id: 5,
            firstName: "Atticus",
            lastName: "Finch",
            birthDate: new Date(new Date() - Math.random() * (1e+13)),
            startDate: new Date(new Date() - Math.random() * (1e+12)),
            department: "Legal"
        },
        {
            id: 4,
            firstName: "Elizabeth",
            lastName: "Bennet",
            birthDate: new Date(new Date() - Math.random() * (1e+13)),
            startDate: new Date(new Date() - Math.random() * (1e+12)),
            department: "Sales"
        },
        {
            id: 3,
            firstName: "Fitzwilliam",
            lastName: "Darcy",
            birthDate: new Date(new Date() - Math.random() * (1e+13)),
            startDate: new Date(new Date() - Math.random() * (1e+12)),
            department: "Engineering"
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Eyre",
            birthDate: new Date(new Date() - Math.random() * (1e+13)),
            startDate: new Date(new Date() - Math.random() * (1e+12)),
            department: "Marketing"
        }, {
            id: 1,
            firstName: "Hermione",
            lastName: "Granger",
            birthDate: new Date(new Date() - Math.random() * (1e+13)),
            startDate: new Date(new Date() - Math.random() * (1e+12)),
            department: "Human Resources"
        },
    ]
};

/**
 * Application context.
 *
 * @type {React.Context<{employees: *[]}>}
 */
export const AppContext = createContext(initialState);

/**
 * Application provider.
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const [id, setId] = useState(state.employees.length);

    const incrementId = () => {
        setId(id + 1);
    };

    const notifyEmployeeRemoved = () => toast("Employee removed!");
    const notifyEmployeeAdded = () => toast("Employee added!");

    const deleteEmployee = (id) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id
        });
        notifyEmployeeRemoved();
    };

    const addEmployee = (employee) => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        });
        notifyEmployeeAdded();
    };

    return (
        <AppContext.Provider
            value={{
                employees: state.employees,
                deleteEmployee,
                addEmployee,
                id,
                incrementId
            }}
        >
            {children}
        </AppContext.Provider>
    )
};