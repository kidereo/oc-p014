import React, {useState, useContext, useEffect, useCallback} from 'react';
import {AppContext} from '../context/AppState';
import departmentList from '../data/departments';
import stateList from '../data/states';
import DatePicker from 'react-datepicker';
import Dropdown from './Dropdown';

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
    const [department, setDepartment] = useState('');
    const [homeState, setHomeState] = useState('');
    const [error, setError] = useState(false);

    /**
     * Wrappers to pass component states around.
     *
     * @type {Function}
     */
    const wrapperSetDepartment = useCallback(value => {
        setDepartment(value);
    }, [setDepartment]);

    const wrapperSetHomeState = useCallback(value => {
        setHomeState(value);
    }, [setHomeState]);


    /**
     * Side effect to increment id to the length of loaded array.
     */
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
        if (!firstName || !lastName || !birthDate || !startDate || !department || !homeState) {
            return setError("Please complete all fields!")
        }
        addEmployee(
            {id, firstName, lastName, birthDate, startDate, department, homeState}
        );
        console.log(`Employee ${firstName} ${lastName} added successfully.`);
        closeModal();
    };

    return (
        <div className='add-employee'>
            <form className='add-employee-form' onSubmit={validateInputs}>

                {/*First name field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text'
                           id='firstName'
                           placeholder='Enter First Name'
                           onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>

                {/*Last name field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                           id='lastName'
                           placeholder='Enter Last Name'
                           onChange={(event) => setLastName(event.target.value)}
                    />
                </div>

                {/*Birthday field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='birthDate'>Date of Birth</label>
                    <DatePicker id='birthDate'
                                selected={birthDate}
                                onChange={(date) => setBirthDate(date)}
                                todayButton='Today'
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode='select'
                    />
                </div>

                {/*Start date field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='startDate'>Start Date</label>
                    <DatePicker id='startDate'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                todayButton='Today'
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode='select'
                    />
                </div>

                {/*Department dropdown component*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='department'>Department</label>
                    <Dropdown id='department'
                              isSearchable
                              parentElementStateSetter={wrapperSetDepartment}
                              placeHolder='Select Department'
                              options={departmentList}
                    />
                </div>

                {/*State dropdown component*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='state'>State</label>
                    <Dropdown id='department'
                              isSearchable
                              parentElementStateSetter={wrapperSetHomeState}
                              placeHolder='Select State'
                              options={stateList}
                    />
                </div>

                {/*Department field styled as HTML <select>*/}
                {/*<div className="add-employee-form-field">
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
                </div>*/}

                {/*Submit button*/}
                <button
                    className='add-employee-button_submit'
                    type='submit'
                >
                    Add employee
                </button>

                {/*Error area*/}
                {
                    error && <p className='error'>{error}</p>
                }
            </form>
        </div>
    )
};

export default AddEmployee;