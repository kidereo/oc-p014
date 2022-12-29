import React from 'react';
import {useState} from 'react';
import WealthHealthName from '../assets/wealth-health.jpg'
import WealthHealthEmblem from '../assets/wealth-health-emblem.jpg'
import AddEmployee from './AddEmployee';

/**
 * A header component which also manipulates the add employee form.
 *
 * @returns {*}
 * @constructor
 */
const Header = () => {
    const [openAddEmployeeModal, setOpenAddEmployeeModal] = useState(false);
    const closeAddEmployeeModal = () => {
        setOpenAddEmployeeModal(false);
    };

    return (
        <div className='header'>
            <img src={WealthHealthEmblem} alt='WealthHealth' className='header-emblem'/>
            {/*<img src={WealthHealthName} alt='WealthHealth' className='header-name'/>*/}
            <h1 className='header-title'>WealthHealth | HRnet</h1>
            <button
                className='header-button'
                onClick={() => setOpenAddEmployeeModal(!openAddEmployeeModal)}
            >
                {!openAddEmployeeModal ? "Add Employee" : "Cancel Adding Employee"}
            </button>
            <div>
                {
                    openAddEmployeeModal && <AddEmployee closeModal={closeAddEmployeeModal}/>
                }
            </div>
        </div>
    )
};

export default Header;
