import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from "../context/AppState";
import departmentList from "../data/departments";
import DatePicker from 'react-datepicker';

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
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [department, setDepartment] = useState('Select');
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
        if (!firstName || !lastName || !birthDate || !startDate || department === 'Select') {
            return setError("Please complete all fields!")
        }
        addEmployee({id, firstName, lastName, birthDate, startDate, department});
        console.log(`Employee ${firstName} ${lastName} added successfully.`);
        closeModal();
    };

    return (
        <div className="add-employee">
            <form className="add-employee-form" onSubmit={validateInputs}>

                {/*First name field*/}
                <div className="add-employee-form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter First Name"
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>

                {/*Last name field*/}
                <div className="add-employee-form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Enter Last Name"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>

                {/*Birthday field*/}
                <div className="add-employee-form-field">
                    <label htmlFor="birthDate">Date of Birth</label>
                    <DatePicker
                        id="birthDate"
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date)}
                        todayButton="Today"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />
                </div>

                {/*Start date field*/}
                <div className="add-employee-form-field">
                    <label>Start Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        todayButton="Today"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />
                </div>

                {/*Department field*/}
                <div className="add-employee-form-field">
                    <label htmlFor="department">Department</label>
                    <select className="add-employee-form-field-selector"
                            id="department"
                            value={department}
                            onChange={(event) => setDepartment(event.target.value)}
                    >
                        <option>{department}</option>
                        {departmentList.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>
                                    {item.value}
                                </option>
                            )
                        })}
                    </select>
                </div>

                {/*Error area*/}
                {
                    error && <p className="error">{error}</p>
                }

                {/*Submit button*/}
                <button
                    className="add-employee-button_submit"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
};

export default AddEmployee;