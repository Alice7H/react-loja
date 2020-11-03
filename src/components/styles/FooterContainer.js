import styled from 'styled-components';

export const FooterContainer = styled.div `
  .footer-subs {
      color: var(--mainWhite);
  }

  .footer-input {
      padding: 8px 0 2px 10px;
      border-radius: 5px;
      margin-right: 10px;
      outline: none;
      font-size: 1.2rem;
      margin-bottom: 18px;
      border: 2px solid var(--mainWhite);
    }

    footer-email-form h2 {
      margin-bottom: 32px;
    }
    
    .footer-input:: placeholder {
      color: var(--lightBlue);
    }

    .footer-input: focus {
      border: 2px solid var(--lightBlue);
    }

    /* Social Icons */
    .social-icon-link {
      color: var(--mainWhite);
      font-size: 24px;
    }
    
    .social-media-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      max-width: 1000px;
      margin: 30px auto 0 auto;
    }
    
    .social-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 240px;
    }
    
    .social-logo {
      color: var(--mainWhite);
      justify-self: start;
      margin-left: 20px;
      cursor: pointer;
      text-decoration: none;
      font-size: 2rem;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    
    .website-rights {
      color: var(--mainWhite);
      margin-bottom: 16px;
    }
    
    @media (max-width: 820px) {
      .footer-input {
        width: 100%;
      }
    
      .btn {
        width: 100%;
      }
    
      .social-media-wrap {
        flex-direction: column;
      }
    }
`