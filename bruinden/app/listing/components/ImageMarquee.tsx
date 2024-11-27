"use client";

import React, { useState, useEffect } from 'react';

interface ImageMarqueeProps {
    images: string[];
    delay?: number;
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images, delay = 5000 }) => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [marqueeDelay, setMarqueeDelay] = useState(delay);

    // PANEL CONSTANTS
    const numImages = images.length;
    const numPanels = numImages < 5 ? 1 : 1 + (Math.ceil((numImages - 5) / 8));

    const goToNextSlide = () => {
        setCurrent((current + 1) % numPanels);
    };

    const goToPreviousSlide = () => {
        if (current == 0) { setCurrent(numPanels - 1); }
        else { setCurrent(current - 1); }
    };

    useEffect(() => {
        if (!paused) {
            const timer = setTimeout(() => {
                goToNextSlide();
                setMarqueeDelay(delay);
            }, marqueeDelay);
            return () => clearTimeout(timer);
        }
    }, [current, paused, marqueeDelay, delay]);

    const calculateColumns = (numImages: number) => {
        return Math.ceil((numImages + 3) / 2);
    }

    const numColumns = calculateColumns(numImages);
    console.log(numColumns);
    return (
        <div className="relative w-full h-[60vh] overflow-hidden bg-white-800 mt-0 px-4">
            <div
                className="flex transition-transform duration-500 ease-in-out justify-start, items-start gap-x-4"
                style={{ transform: `translateX(-${current * (105)}%)`,
                marginTop: "0",
                height: "100%"
            }}
            >
                {/* FIRST PANEL*/}
                <div
                    className={`grid grid-rows-2 grid-cols-${ numColumns } gap-2 w-full h-[60vh]`}
                    >
                        <div
                            className="col-span-2 row-span-2"
                        >
                            <img
                                src={images[0]}
                                alt="Primary"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                            {images.slice(1).map((src, index) => (
                                <div key={index} className='col-span-1 row-span-1' onClick={() => setCurrent(index + 1)}>
                                    <img
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                </div>
            </div>

            <button
                onClick={goToPreviousSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
                >
                &lt;
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
                >
                &gt;
            </button>
        </div>
    );  
};

export default ImageMarquee;