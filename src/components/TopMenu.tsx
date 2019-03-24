import * as React from "react";
import styled from 'styled-components';
import {CommonProps} from "./common/types/CommonProps";
import {colors} from './common/styles/colors';
import {Link} from "react-router-dom";
import {DropDown } from "./Dropdown";


interface Props extends CommonProps {}


const Menu = [
    {
        type: 'drop',
        title: 'О станции',
        items: [
            {
                title: 'История',
                linkTo: 'history',
            },
            {
                title: 'Наша миссия',
                linkTo: 'mission',
            },
            {
                title: 'Можайское водохранилище',
                linkTo: 'reservoir',
            },
        ]
    },
    {
        type: 'drop',
        title: 'Сотрудники',
        items: [
            {
                title: 'Научный и технический персонал',
                linkTo: 'personal',
            },
            {
                title: 'Коллеги',
                linkTo: 'colleagues',
            },
            {
                title: 'Партнёры',
                linkTo: 'partners',
            },
        ]
    },
    {
        type: 'drop',
        title: 'Учебная работа',
        items: [
            {
                title: 'Учебные практики',
                linkTo: 'study',
            },
            {
                title: 'Производственная практика',
                linkTo: 'practise',
            },
        ]
    },
    {
        type: 'drop',
        title: 'Научная работа',
        items: [
            {
                title: 'Проекты',
                linkTo: 'study',
            },
            {
                title: 'Публикации',
                linkTo: 'practise',
            },
        ]
    },
    {
        type: 'drop',
        title: 'Материалы',
        items: [
            {
                title: 'Данные',
                linkTo: 'datas',
            },
            {
                title: 'Карты',
                linkTo: 'maps',
            },
            {
                title: 'Полезные материалы',
                linkTo: 'useful',
            },
        ]
    },
    {
        type: 'single',
        title: 'Контакты',
        linkTo: 'contact',
    },
];


const TopMenu = ({ className }: Props): JSX.Element => (
    <Root className={className}>
        <MenuWrapper>
            <List>
                {Menu.map((item, index) => (
                    <StyledLi key={item.title} >
                        {
                            item.type === 'drop' ?
                                <DropDown
                                    items={item.items!}
                                    title={item.title}/> :
                                <SingleListItem title={item.title} linkTo={item.linkTo!}/>
                        }
                    </StyledLi>
                ))}
            </List>
        </MenuWrapper>
    </Root>
);


interface SingleListItemProps {
    title: string;
    linkTo: string;

}

const SingleListItem = ({ title, linkTo }: SingleListItemProps): JSX.Element => (
    <SingleListWrapper>
        <LinkItemSingle to={linkTo}>{title}</LinkItemSingle>
    </SingleListWrapper>
);


const Root = styled.div`
    background-color: ${colors.primaryLight};
    box-shadow: 0px -5px 20px 0px rgba(0,4,39,0.5);
`;

const MenuWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    font-weight: lighter;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const StyledLi = styled.li`
`;


const SingleListWrapper = styled.div`
    padding: 10px 35px;
    cursor: pointer;
    
    &:hover {
        background-color: ${colors.secondaryDark};
    }
`;

const LinkItemSingle = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    width: 100%;
`;


export {TopMenu}
