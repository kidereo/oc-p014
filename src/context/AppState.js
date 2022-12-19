import React from "react";
import {createContext, useReducer} from "react";
import {appReducer} from './AppReducer';

const initialState = {
    employees: [
        {
            id: 3,
            firstName: "James",
            lastName: "Bond"
        },
        {
            id: 2,
            firstName: "Auric",
            lastName: "Goldfinger"
        },
        {
            id: 1,
            firstName: "Francisco",
            lastName: "Scaramanga"
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

    const deleteEmployee = (id) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id
        })
    };

    const addEmployee = (employee) => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        })
    };

    return (
        <AppContext.Provider
            value={{
                employees: state.employees,
                deleteEmployee,
                addEmployee
            }}
        >
            {children}
        </AppContext.Provider>
    )
};