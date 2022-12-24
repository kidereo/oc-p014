import React, {createContext, useReducer, useState} from "react";
import {appReducer} from './AppReducer';
import {toast} from 'react-toastify';
import employeeMock from '../data/employeeFactory'

/**
 * Load sample employees and send a notification.
 *
 * @type {{employees: {firstName: string | * | never, lastName: string | * | never, id: number, department: string | *, birthDate: Date | *, startDate: Date | *}[]}}
 */
const initialState = {
    employees: employeeMock
};
toast.success(`Sample data of ${initialState.employees.length} employees initialised!`);

/**
 * Set application context.
 *
 * @type {React.Context<{employees: *[]}>}
 */
export const AppContext = createContext(initialState);

/**
 * Create application provider.
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const [id, setId] = useState(state.employees.length);

    const incrementId = () => setId(id + 1);

    const deleteEmployee = (id) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id
        });
        const employee = state.employees.find(employee => employee.id === id);
        toast.warn(`${employee.firstName} ${employee.lastName} removed!`);
    };

    const addEmployee = (employee) => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        });
        toast.success(`${employee.firstName} ${employee.lastName} added!`);
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