import React from 'react';
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom"

import { Header } from "../header";

export const Layout = () => (
        <>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <ToastContainer />
        </>
);
