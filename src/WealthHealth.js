import React from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import Footer from './components/Footer';
import {AppProvider, AppContext} from "./context/AppState";
import {ToastContainer} from 'react-toastify';
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
                        <div className='body-container'>
                            <BrowserRouter>
                                <header>
                                    <Header/>
                                </header>
                                <main>
                                    <Routes>
                                        <Route index element={<EmployeeList/>}/>
                                        <Route path="/add-employee" element={<AddEmployee/>}/>
                                    </Routes>
                                </main>
                                <footer>
                                    <Footer/>
                                </footer>
                                <ToastContainer
                                    position='bottom-right'
                                    autoClose={1000}
                                />
                            </BrowserRouter>
                        </div>
                    )
                }
            </AppContext.Consumer>
        </AppProvider>
    );
}

export default WealthHealth;
