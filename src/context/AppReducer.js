/**
 * State reducers.
 *
 * @param state
 * @param action
 * @returns {{employees: *[]}|*}
 */
export const appReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_EMPLOYEE': {
            return {
                ...state,
                employees: state.employees.filter((employee) => employee.id !== action.payload)
            }
        }
        case 'ADD_EMPLOYEE': {
            return {
                ...state,
                employees: [action.payload, ...state.employees]
            }
        }
        default: {
            return state
        }
    }
};