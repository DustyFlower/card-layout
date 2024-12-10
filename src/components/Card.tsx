import styled from 'styled-components';
import {cardTheme} from '../styles/cardTheme';
import {Image} from './Image';
import {Text, TextWrapper, Title} from './TextWrapper';
import {ButtonWrapper, StyledBtn} from './ButtonWrapper';
import React, {FC} from 'react';

type CardPropsType = {
    imgSrc: string,
    title: string,
    description: string,
}

export const Card: FC<CardPropsType> = ({imgSrc, title, description}) => {
    return (
        <StyledCard>
            <Image src={imgSrc}/>
            <TextWrapper>
                <Title>{title}</Title>
                <Text>
                    {description}
                </Text>
                <ButtonWrapper>
                    <StyledBtn btnType={'primary'}>See more</StyledBtn>
                    <StyledBtn btnType={'outlined'}>Save</StyledBtn>
                </ButtonWrapper>
            </TextWrapper>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    min-height: 350px;
    width: 300px;
    border-radius: 15px;
    background-color: ${cardTheme.colors.backgroundColor};
    box-shadow: 0 4px 20px 5px #0000001A;
    display: flex;
    flex-direction: column;
    padding: 10px;

    button {
        cursor: pointer;
    }
`