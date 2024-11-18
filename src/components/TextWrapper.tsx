import styled from 'styled-components';
import {cardTheme} from '../styles/cardTheme';

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 10px;
    flex-grow: 1;
    justify-content: space-between;
`
export const Title = styled.h1`
    font-size: 16px;
    color: ${cardTheme.colors.headerColor};
`
export const Text = styled.p`
    font-size: 12px;
    color: ${cardTheme.colors.textColor};
    line-height: 20px;
    white-space: pre-line;
`