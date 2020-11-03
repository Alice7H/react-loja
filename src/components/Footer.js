import { Link } from "react-router-dom";
import { ButtonContainer } from "./styles/ButtonContainer";
import { FooterContainer } from "./styles/FooterContainer";

export default function Footer() {
    return (
        <FooterContainer>
        <div className="bg-footer py-4 mt-3 d-flex flex-column justify-content-center align-items-center">
            <section className="footer-subs d-flex flex-column justify-content-center align-items-center text-center mb4 p-4">
                <p className="mb-4 text-title">
                    Join the Mobile Newsletter to receive our best products
                </p>
                <p className="text-title">You can unsubscribe at any time</p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <ButtonContainer>
                            <span className="mr-2 ml-1">Subscribe</span>
                        </ButtonContainer>
                    </form>
                </div>
            </section>
            <section className="mw-100 w-100">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo text-title">
                            <i className="fa fa-lightbulb-o mr-2" /> H&M-IT
                        </Link>
                    </div>
                    <small className="website-rights text-title">H&M-IT © 2020</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fa fa-facebook-square" />
                        </Link>

                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fa fa-instagram" />
                        </Link>

                        <Link
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fa fa-youtube-play" />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fa fa-twitter-square" />
                        </Link>

                        <Link
                            className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fa fa-linkedin-square" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        </FooterContainer>
    );
}
