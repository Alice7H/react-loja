import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";
import { CarouselContainer } from "./styles/CarouselContainer";

export default function CarouselComponent() {
    const prevIcon = <span className="fa fa-chevron-left" aria-hidden="true" />;
    const nextIcon = (
        <span className="fa fa-chevron-right" aria-hidden="true" />
    );
    const location = useLocation();

    if (location.pathname === "/") {
        return (
            <CarouselContainer>
                <Carousel prevIcon={prevIcon} nextIcon={nextIcon}>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block my-5 mx-auto"
                            src="/images/herrreiprich.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span>
                                Photo by{" "}
                                <a href="https://unsplash.com/@herrreiprich?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                                target="_blank" rel="noreferrer">
                                    herrreiprich
                                </a>{" "}
                                on{" "}
                                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                                target="_blank" rel="noreferrer">
                                    Unsplash
                                </a>
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block my-5 mx-auto"
                            src="/images/piotr-cichosz.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <span>
                                Photo by{" "}
                                <a href="https://unsplash.com/@ptrc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" 
                                target="_blank" rel="noreferrer">
                                    Piotr Cichosz
                                </a>{" "}
                                on{" "}
                                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" 
                                target="_blank" rel="noreferrer">
                                    Unsplash
                                </a>
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block my-5 mx-auto"
                            src="images/timothy-meinberg.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <span>
                                Photo by{" "}
                                <a href="https://unsplash.com/@timothymeinberg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" 
                                target="_blank" rel="noreferrer">
                                    Timothy Meinberg
                                </a>{" "}
                                on{" "}
                                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" 
                                target="_blank" rel="noreferrer">
                                    Unsplash
                                </a>
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </CarouselContainer>
        );
    } else {
        return null;
    }
}
