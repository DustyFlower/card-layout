import React from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import {cardTheme} from './styles/cardTheme';
import image from './assets/images/0cbd17e4381497547009ce81acc4eee3.jpg'

function App() {
    return (
        <Container>
            <Card>
                <Image src={image}/>
                <Wrapper>
                    <Title>Headline</Title>
                    <Text>
                        {'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'}
                    </Text>
                    <ButtonWrapper>
                        <StyledBtn btnType={'primary'}>See more</StyledBtn>
                        <StyledBtn btnType={'outlined'}>Save</StyledBtn>
                    </ButtonWrapper>
                </Wrapper>

            </Card>
        </Container>
    );
}

export default App;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    height: 350px;
    width: 300px;
    border-radius: 15px;
    background-color: ${cardTheme.colors.backgroundColor};
    box-shadow: 0 4px 20px 5px #0000001A;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 20px 10px;

    button {
        cursor: pointer;
    }
`

const Image = styled.img`
    width: 280px;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 10px;
    flex-grow: 1;
    justify-content: space-between;
`
const Title = styled.h1`
    font-size: 16px;
    color: ${cardTheme.colors.headerColor};
`
const Text = styled.p`
    font-size: 12px;
    color: ${cardTheme.colors.textColor};
    line-height: 20px;
    white-space: pre-line;
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;

    button + button {
        margin-left: 10px;
    }
`
type StyledBtnPropsType = {
    btnType: 'primary' | 'outlined'
}

const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    width: 86px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 5px;


    ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
        color: white;
        background-color: ${cardTheme.colors.buttonColor};
    `
    }
    
    ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
        color: ${cardTheme.colors.buttonColor};
        background-color: transparent;
        border: 2px solid ${cardTheme.colors.buttonColor};
    `}
`