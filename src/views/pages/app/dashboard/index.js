import React,{ Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Dropdown} from 'react-bootstrap';

import { ThemeContext } from "../../../../context/ThemeContext";
import PageUnderConstruction from '../../../components/Custom/Page/UnderConstruction';

const Dashboard = () => {
    const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "dark" });
	}, []);
    return (
        <Fragment>
            <h1>Dashboard</h1>
            <PageUnderConstruction />
        </Fragment>
    );
};

export default Dashboard;