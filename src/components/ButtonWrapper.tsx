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
export const StyledBtn = styled.button<StyledBtnPropsType>`
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