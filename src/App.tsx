import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Card} from './components/Card';
import image from './assets/images/0cbd17e4381497547009ce81acc4eee3.jpg';

const cardData = [
    {
        imgSrc: image,
        title: 'Headline',
        description: 'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'
    },
    {
        imgSrc: image,
        title: 'Headline',
        description: 'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'
    },
    {
        imgSrc: image,
        title: 'Headline',
        description: 'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'
    },
    {
        imgSrc: image,
        title: 'Headline',
        description: 'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'
    },
    {
        imgSrc: image,
        title: 'Headline',
        description: 'Faucibus.Faucibus.Sit sit sapien sit\ntempusrisu ut. Sit molestie ornare in venen.'
    },
]

function App() {
    return (
        <Container>
            {cardData.map((c, index) => {
                return (
                    <Card
                        key={index}
                        imgSrc={c.imgSrc}
                        title={c.title}
                        description={c.description}
                    />
                );
            })}
        </Container>
    );
}

export default App;

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    padding: 20px;
`

