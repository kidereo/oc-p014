import React, {lazy, Suspense} from 'react';
import {AppProvider, AppContext} from "./context/AppState";
import {ToastContainer} from 'react-toastify';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

const EmployeeList = lazy(() => import('./components/EmployeeList'));
const AddEmployee = lazy(() => import('./components/AddEmployee'));
const renderLoader = () => '';

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
                                    <Suspense fallback={renderLoader()}>
                                        <Routes>
                                            <Route index element={<EmployeeList/>}/>
                                            <Route path="/add-employee" element={<AddEmployee/>}/>
                                        </Routes>
                                    </Suspense>
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
