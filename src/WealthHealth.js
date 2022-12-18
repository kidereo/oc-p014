import React from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList'

function WealthHealth() {
    return (
        <div className="body-container">
            <Header/>
            <main>
                <h2>
                    Current Employees
                </h2>
                <EmployeeList/>
            </main>
        </div>
    );
}

export default WealthHealth;
