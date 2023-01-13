import React, {useState, useContext, useEffect, useCallback} from 'react';
import {AppContext} from '../context/AppState';
import departmentList from '../data/departments';
import stateList from '../data/states';
import DatePicker from 'react-datepicker';
//import Dropdown from './Dropdown'; //This import is replaced with a home made npm component
import {Dropdown} from 'react-searchable-dropdown-component';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import {Link, useNavigate} from "react-router-dom";

/**
 * Add a new employee.
 *
 * @param closeModal
 * @returns {*}
 * @constructor
 */
const AddEmployee = () => {
    const {addEmployee, id, incrementId} = useContext(AppContext);
    //const id = employees.length + 1;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [department, setDepartment] = useState('');
    const [homeState, setHomeState] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

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
        if (!firstName || !lastName || !birthDate || !startDate || !department || !homeState || !street || !city || !zipCode) {
            return setError("Please complete all fields!")
        }
        addEmployee(
            {id, firstName, lastName, birthDate, startDate, department, homeState, street, city, zipCode}
        );
        console.log(`Employee ${firstName} ${lastName} added successfully.`);
        navigate('/');
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
                              parentElementStateSetter={wrapperSetDepartment}
                              placeHolder='Select Department'
                              options={departmentList}
                              arrowDown={<ArrowDropDownOutlinedIcon/>}
                              arrowUp={<ArrowDropUpOutlinedIcon/>}
                    />
                </div>

                {/*State dropdown component*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='state'>State</label>
                    <Dropdown id='state'
                              isSearchable
                              persistKey
                              parentElementStateSetter={wrapperSetHomeState}
                              placeHolder='Select State'
                              options={stateList}
                              arrowDown={<ArrowDropDownOutlinedIcon/>}
                              arrowUp={<ArrowDropUpOutlinedIcon/>}
                    />
                </div>

                {/*Street field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='street'>Street</label>
                    <input type='text'
                           id='street'
                           placeholder='Enter Street'
                           onChange={(event) => setStreet(event.target.value)}
                    />
                </div>

                {/*City field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='street'>City</label>
                    <input type='text'
                           id='city'
                           placeholder='Enter City'
                           onChange={(event) => setCity(event.target.value)}
                    />
                </div>

                {/*Zip Code field*/}
                <div className='add-employee-form-field'>
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input type='text'
                           id='zipCode'
                           placeholder='Enter Zip Code'
                           onChange={(event) => setZipCode(event.target.value)}
                    />
                </div>

                {/*Submit button*/}
                <button
                    className='add-employee-button_submit'
                    type='submit'
                >
                    Add employee
                </button>

                {/*Cancel button*/}
                <Link to="/">
                    <button className='add-employee-button_cancel'>
                        Cancel adding employee
                    </button>
                </Link>

                {/*Error area*/}
                {
                    error && <p className='add-employee-form-error'>{error}</p>
                }
            </form>
        </div>
    )
};

export default AddEmployee;