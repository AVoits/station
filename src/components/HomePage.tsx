import * as React from "react";
import styled from 'styled-components';
import {CommonProps} from "./common/types/CommonProps";


interface Props extends CommonProps {}


const HomePage = ({ className }: Props): JSX.Element => (
    <Root className={className}>
        Красновидовская учебно-научная станция географического факультета Московского государственного университета имени М.В.Ломоносова является центром проведения лимнологических и гидроэкологических исследований, а также служит полигоном для проведения практик студентов-географов различных специальностей.


    </Root>
);

const Root = styled.div``;

export { HomePage };
