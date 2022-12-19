import React from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList'
import Footer from './components/Footer'

function WealthHealth() {
    return (
        <div className="body-container">
            <header>
                <Header/>
            </header>
            <main>
                <EmployeeList/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default WealthHealth;
