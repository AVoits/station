import * as React from 'react';
import {Helmet} from "react-helmet";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faChevronDown,
    faChevronUp,
    faPhone,
    faMailBulk,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronUp, faPhone, faMailBulk, faMapMarkerAlt);




// Styles
import 'normalize.css';
import './common/styles/commonStyles.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Header} from "./Header";
import {Contacts} from "./Contacts";
import styled from "styled-components";
import {HomePage} from "./HomePage";
import {Footer} from "./Footer";


const App = () => (
    <BrowserRouter>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Красновидовская учебно-научная станция</title>
        </Helmet>
        <RootWrapper>
            <Header />
            <Content>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/contact" component={Contacts} />
                </Switch>
            </Content>
            <Footer />
        </RootWrapper>
    </BrowserRouter>
);

const RootWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    flex-grow: 1;
`;


export { App };


