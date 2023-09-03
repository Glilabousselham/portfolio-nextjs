"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react'

const ProjectImagesSlider = ({ items }: { items: string[] }) => {
    return (

        <Carousel
            showThumbs={false}
            dynamicHeight={true}
            infiniteLoop={true}
        >

            {items.map((image: string) => (
                <img key={image} className="max-h-[500px] w-full  object-contain" src={image} alt='project image' />
            ))}
        </Carousel>

    )



}

export default ProjectImagesSlider