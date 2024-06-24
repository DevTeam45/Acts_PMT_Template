import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout"; // Ensure correct import path
import Setting from "./layouts/Setting";
import ScrollToTop from "./layouts/ScrollToTop";
import LockScreen from "./pages/auth/LockScreen";
import Error400 from "./pages/error/Error400";
import Error403 from "./pages/error/Error403";
import Error404 from "./pages/error/Error404";
import Error500 from "./pages/error/Error500";
import Error503 from "./pages/error/Error503";
import Dashboard from "./pages/app/dashboard";
import Requests from "./pages/app/requests";
import Request from "./pages/app/request";
import NewRequest from "./pages/app/newRequest";
import Approvals from "./pages/app/approvals";
import Approval from "./pages/app/approval";
import Suppliers from "./pages/app/suppliers";
import Supplier from "./pages/app/supplier";
import Subscriptions from "./pages/app/subscriptions";
import Profile from "./pages/app/profile";
import AddQuotationsForm from "./pages/app/addquotations"
import SubmitRequest from "./pages/app/submitrequest"
import Settings from "./pages/app/settings";
import ProtectedRoute from './ProtectedRoute'; 

const Markup = () => {
    const userID = localStorage.getItem('userID'); // Fetch the userID from localStorage

    const allRoutes = [
        { url: "/lock-screen", component: <LockScreen /> },
        { url: "/error-400", component: <Error400 /> },
        { url: "/error-403", component: <Error403 /> },
        { url: "/error-404", component: <Error404 /> },
        { url: "/error-500", component: <Error500 /> },
        { url: "/error-503", component: <Error503 /> },
        { url: "/auth/login", component: <LockScreen /> },
        { url: "/auth/lock-screen", component: <LockScreen /> },
        { url: "/auth/forgot-password", component: <LockScreen /> },
        { url: "/app", component: <Dashboard />, rights: ["ProcurementSystemAccess"]},
        { url: "/", component: <Dashboard />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/dashboard", component: <Dashboard />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/requests", component: <Requests />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/request", component: <Request />, rights: ["ProcurementSystemAccess"]}, 
        { url: "/app/request/:requestID/add-quotations", component: <AddQuotationsForm />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/request/:requestID/submit", component: <SubmitRequest />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/new-request", component: <NewRequest />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/approvals", component: <Approvals />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/approval", component: <Approval />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/suppliers", component: <Suppliers />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/supplier", component: <Supplier />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/subscriptions", component: <Subscriptions />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/profile", component: <Profile />, rights: ["ProcurementSystemAccess"]},
        { url: "/app/settings", component: <Settings />, rights: ["ProcurementSystemAccess"]},
    ];

    return (
        <>
            <Routes>
                <Route path='page-lock-screen' element={<LockScreen />} />
                <Route path='page-error-400' element={<Error400 />} />
                <Route path='page-error-403' element={<Error403 />} />
                <Route path='page-error-404' element={<Error404 />} />
                <Route path='page-error-500' element={<Error500 />} />
                <Route path='page-error-503' element={<Error503 />} />
                <Route element={<MainLayout />}>
                    {allRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.url}
                            element={<ProtectedRoute element={route.component.type} userID={userID} requiredRights={route.rights || []} />}
                        />
                    ))}
                </Route>
            </Routes>
            <Setting />
            <ScrollToTop />
        </>
    );
};

export default Markup;
