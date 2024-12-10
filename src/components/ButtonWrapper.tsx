import styled, {css} from 'styled-components';
import {cardTheme} from '../styles/cardTheme';

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;

    button + button {
        margin-left: 10px;
    }
`
type StyledBtnPropsType = {
    btnType: 'primary' | 'outlined'
}

const buttonStyles = {
    primary: css`
        color: white;
        background-color: ${cardTheme.colors.buttonColor};
        border: 2px solid ${cardTheme.colors.buttonColor};
    `,
    outlined: css`
        color: ${cardTheme.colors.buttonColor};
        background-color: transparent;
        border: 2px solid ${cardTheme.colors.buttonColor};
    `
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    font-family: Inter, sans-serif;
    font-weight: 700;
    line-height: 1;
    border: none;
    width: 86px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 5px;
    transition: all 0.2s;

    ${props => buttonStyles[props.btnType]}
        // При наведении применяем стили противоположного типа
    &:hover {
        ${props => buttonStyles[props.btnType === 'primary' ? 'outlined' : 'primary']}
`