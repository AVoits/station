import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {colors} from "./common/styles/colors";
import {Link} from "react-router-dom";
import {CommonProps} from "./common/types/CommonProps";

interface Props extends CommonProps {
    items: DropListItemProps[];
    title: string;

}

interface State {
    listOpen: boolean;
}



interface DropListItemProps {
    title: string;
    linkTo: string;

}

class DropDown extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            listOpen: false,
        };

        this.toggleList = this.toggleList.bind(this);
        this.close = this.close.bind(this);
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
        }))
    }

    componentDidUpdate(){
        const { listOpen } = this.state;

        setTimeout(() => {
            if(listOpen){
                window.addEventListener('click', this.close)
            }
            else{
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }



    componentWillUnmount(){
        window.removeEventListener('click', this.close)
    }


    close(){
        this.setState({
            listOpen: false,
        })
    }

    render() {
        return (
            <DropWrapper>
                <DropHeader isOpen={this.state.listOpen} onClick={this.toggleList} >
                    <DropHeaderTitle>{this.props.title}</DropHeaderTitle>
                    {this.state.listOpen ?
                        <FontAwesomeIcon icon="chevron-up"/> :
                        <FontAwesomeIcon icon="chevron-down"/>}
                </DropHeader>
                <DropListWrapper isOpen={this.state.listOpen}>
                    {this.props.items.map(item => (
                        <LinkItem
                            key={item.title}
                            to={item.linkTo}>{item.title}</LinkItem>
                    ))}
                </DropListWrapper>
            </DropWrapper>
        );
    }
}


export { DropDown };

const DropWrapper = styled.div`
    position: relative;
`;

const DropListWrapper = styled.div`
    display: ${(props: {isOpen: boolean}) => props.isOpen ? 'flex' : 'none' };
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    background-color: ${colors.secondary};
`;

const DropHeader = styled.div`
    padding: 10px 30px 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: ${(props: {isOpen: boolean}) => props.isOpen ? colors.secondary : 'transparent' };
    
    &:hover {
        background-color: ${colors.secondaryDark};
    }
`;



const DropHeaderTitle = styled.div`
    padding-right: 20px;
`;

const LinkItem = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    padding: 10px 15px;
    display: block;
    
    &:hover {
        background-color: ${colors.secondaryDark};
    }
`;
