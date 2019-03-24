import * as React from "react";
import styled from 'styled-components';

import {CommonProps} from "./common/types/CommonProps";
import {colors} from './common/styles/colors';

interface Props extends CommonProps {
    type: 'white' | 'dark' | 'light';
}

interface PropsToStyle {
    color: string;
}

const Separator = ({ type }: Props): JSX.Element => {

    let color;

    switch (type) {
        case 'white':
            color = '#ffffff';
            break;
        case 'dark':
            color = colors.primaryLight;
            break;
        case 'light':
            color = colors.secondaryDark;
            break;
        default:
            color = '#ffffff';
    }

    return (
        <Root>
            <Line color={color}/>
            <CenterItem color={color}/>
            <Line color={color}/>
        </Root>
    )
};

const Root = styled.div`
    display: flex;
    width: 100%;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
`;

const Line = styled.div`
    height: 1px;
    background-color: ${(props: PropsToStyle) => props.color};
    flex-grow: 1;
`;

const CenterItem = styled.div`
    width: 3px;
    height: 3px;
    margin: 0 10px;
    border: 1px solid ${(props: PropsToStyle) => props.color};
    transform: rotate(45grad);
`;


export { Separator };