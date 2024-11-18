import React from 'react';
import './App.css';
import styled from 'styled-components';
import image from './assets/images/0cbd17e4381497547009ce81acc4eee3.jpg'
import {Image} from './components/Image';
import {Card} from './components/Card';
import {Text, TextWrapper, Title} from './components/TextWrapper';
import {ButtonWrapper, StyledBtn} from './components/ButtonWrapper';

function App() {
    return (
        <Container>
            <Card>
                <Image src={image}/>
                <TextWrapper>
                    <Title>Headline</Title>
                    <Text>
                        {'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'}
                    </Text>
                    <ButtonWrapper>
                        <StyledBtn btnType={'primary'}>See more</StyledBtn>
                        <StyledBtn btnType={'outlined'}>Save</StyledBtn>
                    </ButtonWrapper>
                </TextWrapper>

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

