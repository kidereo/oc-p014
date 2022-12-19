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
        <div className="header">
            <img src={WealthHealthName} alt="WealthHealth" className="header-title"/>
            <h1>HRnet</h1>
            <button
                className="header-button"
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
