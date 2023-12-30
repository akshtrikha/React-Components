import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Carousel = ({ data }) => {
    console.log(data);
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide + 1) % data.length);
    };

    const prevSlide = () => {
        setSlide((slide - 1 + data.length) % data.length);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill
                className="arrow arrow-left"
                onClick={() => prevSlide()}
            />
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={item.id}
                        className={idx === slide ? "slide" : "slide-hidden"}
                    ></img>
                );
            })}
            <BsArrowRightCircleFill
                className="arrow arrow-right"
                onClick={() => {
                    nextSlide();
                }}
            />
            <span className="indicators">
                {data.map((item, idx) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => {setSlide(idx)}}
                            className={idx === slide ? "indicator" : "indicator-hidden"}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default Carousel;
