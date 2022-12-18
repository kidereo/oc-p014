import React from 'react';
import {useState} from 'react';
import WealthHealthName from '../assets/wealth-health.jpg'
import AddEmployee from './AddEmployee';

const Header = () => {
    const [openAddEmployeeModal, setOpenAddEmployeeModal] = useState(false);
    const closeAddEmployeeModal = () => {
        setOpenAddEmployeeModal(false);
    };

    return (
        <header className="header">
            <img src={WealthHealthName} alt="WealthHealth" className="header-title"/>
            <button
                className="header-button"
                onClick={() => setOpenAddEmployeeModal(!openAddEmployeeModal)}
            >
                {!openAddEmployeeModal ? "Add Employee" : "Cancel Adding Employee"}
            </button>
            {
                openAddEmployeeModal && <AddEmployee closeModal={closeAddEmployeeModal}/>
            }
        </header>
    )
};

export default Header;
