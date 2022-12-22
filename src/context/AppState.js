import React, {createContext, useReducer, useState} from "react";
import {appReducer} from './AppReducer';

const initialState = {
    employees: [
        {
            id: 4,
            firstName: "James",
            lastName: "Bond"
        },
        {
            id: 3,
            firstName: "Auric",
            lastName: "Goldfinger"
        },
        {
            id: 2,
            firstName: "Francisco",
            lastName: "Scaramanga"
        }, {
            id: 1,
            firstName: "Rosa",
            lastName: "Klebb"
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
                addEmployee,
                id,
                incrementId
            }}
        >
            {children}
        </AppContext.Provider>
    )
};