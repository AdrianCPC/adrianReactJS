import React from 'react';
import './Slider.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Proyectos</h2>
            </div>
            <Carousel
            plugins={[
                'arrows',
                'infinite',
                'arrows',
                {
                    resolve: Slider,
                    options: {
                        numberOfSlides: 1,
                    },
                },
            ]}>
                slides={Slides}
            </Carousel>
        </div>
    )
};

export default Slider;
