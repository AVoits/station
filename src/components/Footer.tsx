import * as React from "react";
import styled from 'styled-components';
import {CommonProps} from "./common/types/CommonProps";
import {colors} from "./common/styles/colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import Logo from "./images/Instagram.svg";

interface Props extends CommonProps {}


const Footer = ({ className }: Props): JSX.Element => (
    <Root className={className}>
        <FooterWrapper>
            <ContactsBlock>
                <Item>
                    <FontAwesomeIcon icon="phone"/>
                    <Phone>
                        <span>+7 <span>(49638)</span>51619</span>
                    </Phone>
                </Item>
                <Item>
                    <FontAwesomeIcon icon="mail-bulk"/>
                    <MailLink href={'mailto:krasnovidovo.station@gmail.com'}>krasnovidovo.station@gmail.com</MailLink>
                </Item>
                <Item>
                    <Insta href={'https://www.instagram.com/krasnovidovo.msu/'} target={'_blank'}>
                        <img src={Logo}/>
                    </Insta>
                </Item>
                <Copyright>Copyright © 2019 МГУ Красновидовская учебно-научная станция МГУ</Copyright>
            </ContactsBlock>
            <AddressBlock>
                <div>Красновидовская учебно-научная станция МГУ</div>
                <FlexBlock>
                    <IndexBlock>
                        <Index>143221</Index>
                        <FontAwesomeIcon icon="map-marker-alt" size="2x" color={colors.primary}/>
                    </IndexBlock>
                    <div>
                        <div>Московская область</div>
                        <div>Можайский район</div>
                        <div>пос. Красновидово</div>
                        <div>ул.Зеленая, д.5</div>
                    </div>
                </FlexBlock>
            </AddressBlock>
        </FooterWrapper>
    </Root>
);

export { Footer };


const Root = styled.div`
    background-color: ${colors.primary};
    color: #ffffff;
    font-weight: 300;
`;

const FooterWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;

const ContactsBlock = styled.div`
    padding: 30px 30px 0;
`;

const Item = styled.div`
    padding: 0 0 15px 0;
    display: flex;
   
`;

const MailLink = styled.a`
        text-decoration: none;
        color: #ffffff;
        padding: 0 20px;
`;


const Phone = styled.div`
    font-size: 24px;
    
    & > span {
        padding: 0 20px;
    
    }
`;


const Insta = styled.a`
    display: block;
    width: 30px;
    
    & > img {
        width: 100%;
    }
`;


const AddressBlock = styled.div`
    background-color: ${colors.primaryLight};
    padding: 30px 30px 0;
`;

const FlexBlock = styled.div`
    display: flex;
    padding: 10px 0 0 0;
    border-top: 1px solid ${colors.primary};
    margin-top: 10px;
`;

const IndexBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
`;

const Index = styled.div`
    color: ${colors.primary};
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 20px;
`;

const Copyright = styled.div`
    font-size: 12px;
    opacity: 0.5;
    padding-bottom: 5px;
`;
