import styled from'styled-components';

export const MoviesListStyled = styled.ul`

padding-top: 32px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 
`

export const LiStyled = styled.li`

    position: relative;
    transition: all 0.2s;

    &:hover,
    &:focus {
    transform: scale(1.02);
}
`