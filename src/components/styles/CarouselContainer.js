import styled from 'styled-components';

export const CarouselContainer = styled.div `

  .carousel-indicators li {
    background-color: var(--mainBlue);
  }

  .carousel-control-next,
  .carousel-control-prev span { 
    color: var(--mainBlue);
    font-size: 2rem;
    font-weight: bold;
  }

  .carousel-inner {
    background: var(--lightWhite);
  }

  .carousel-caption {
    padding-bottom: 30px;
    left: 40%;
    
    a: hover {
      text-decoration: none;
    }
  }

  .carousel-item img {
    width: 40rem;
  }
`