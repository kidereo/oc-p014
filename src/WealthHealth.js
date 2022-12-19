import React from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList'
import Footer from './components/Footer'
import {AppProvider, AppContext} from "./context/AppState";

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
                        </div>
                    )
                }
            </AppContext.Consumer>
        </AppProvider>
    );
}

export default WealthHealth;
