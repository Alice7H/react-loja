import styled from 'styled-components';

export const ButtonContainer = styled.button `
    text-transform: capitalized;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue2);
    border-color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue2)'};
    color: ${props => (props.cart ? 'var(--mainYellow)' : 'var(--lightBlue2)')};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue2)'};
        color: ${props => props.cart ? 'var(--mainRed)' : 'var(--mainWhite)' };
    }
    &:focus {
        outline: none;
    }
`;
