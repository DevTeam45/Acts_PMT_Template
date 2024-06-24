import React,{ Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Dropdown} from 'react-bootstrap';

import { ThemeContext } from "../../../../context/ThemeContext";
import App from '../../../../App';
import PageUnderConstraction from '../../../components/Custom/Page/UnderConstruction';


const Subscriptions = () => {
    const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "dark" });
	}, []);
    return (
        <Fragment>
            <h1>Subscriptions</h1>
            <PageUnderConstraction />
        </Fragment>
    );
};

export default Subscriptions;