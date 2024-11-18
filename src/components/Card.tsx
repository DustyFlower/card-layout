import styled from 'styled-components';
import {cardTheme} from '../styles/cardTheme';

export const Card = styled.div`
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