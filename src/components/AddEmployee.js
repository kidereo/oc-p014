import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from "../context/AppState";

/**
 * Add a new employee.
 *
 * @param closeModal
 * @returns {*}
 * @constructor
 */
const AddEmployee = ({closeModal}) => {
    const {addEmployee, id, incrementId} = useContext(AppContext);
    //const id = employees.length + 1;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        incrementId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Validate form inputs.
     *
     * @param event
     */
    const validateInputs = (event) => {
        event.preventDefault();
        if (!firstName || !lastName) {
            return setError("Please complete all fields!")
        }
        addEmployee({id, firstName, lastName});
        console.log(`Employee ${firstName} ${lastName} added successfully.`);
        closeModal();
    };

    return (
        <div className="add-employee">
            <form className="add-employee-form" onSubmit={validateInputs}>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                />
                {
                    error && <p className="error">{error}</p>
                }
                <button
                    className="add-employee-button_submit"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    )
};

export default AddEmployee;