import React from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList'
import Footer from './components/Footer'
import {AppProvider, AppContext} from "./context/AppState";
import {ToastContainer} from 'react-toastify';

/**
 * Top app tree.
 *
 * @returns {*}
 * @constructor
 */
function WealthHealth() {
    return (
        <AppProvider>
            <AppContext.Consumer>
                {
                    ({employees}) => (
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
                            <ToastContainer
                                position="bottom-right"
                                autoClose={2000}
                            />
                        </div>
                    )
                }
            </AppContext.Consumer>
        </AppProvider>
    );
}

export default WealthHealth;
