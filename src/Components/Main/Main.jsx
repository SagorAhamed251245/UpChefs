import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Main;