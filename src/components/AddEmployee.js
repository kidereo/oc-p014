import React from 'react';
import {useState} from 'react';

const AddEmployee = ({closeModal}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(false);

    const validateInputs = (event) => {
        event.preventDefault();
        if (!firstName || !lastName) {
            setError("Please complete all fields!")
        }
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

                <button
                    className="add-employee-button_submit"
                    type="submit"
                >
                    Save
                </button>

                {
                    error && <p>{error}</p>
                }
            </form>

        </div>
    )

};

export default AddEmployee;