import * as React from "react";
import styled from 'styled-components';
import {CommonProps} from "./common/types/CommonProps";


interface Props extends CommonProps {}


const Contacts = ({ className }: Props): JSX.Element => (
    <Root className={className}>
        Contacts
    </Root>
);

const Root = styled.div``;

export { Contacts };
