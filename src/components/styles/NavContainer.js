import styled from 'styled-components';

export const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    .navbar-brand{
        display: none;
    }


    @media screen and (min-width: 768px){
        .navbar-brand {
            display: block;
            width: 90px;
            height: 90px;  
        }
    }
`;