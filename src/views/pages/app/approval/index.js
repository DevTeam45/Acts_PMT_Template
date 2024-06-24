import React,{ Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Dropdown} from 'react-bootstrap';

import { ThemeContext } from "../../../../context/ThemeContext";
import PageUnderConstruction from '../../../components/Custom/Page/UnderConstruction';

const Approval = () => {
    const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "dark" });
	}, []);
    return (
        <Fragment>
            <h1>Approval</h1>
            <PageUnderConstruction />
        </Fragment>
    );
};

export default Approval;