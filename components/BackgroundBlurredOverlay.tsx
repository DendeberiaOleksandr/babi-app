import { StaticImageData } from 'next/image';
import React from 'react'

type Props = {
    image: StaticImageData;
    children: any;
    direction?: 'flex-col' | 'flex-row';
    justify?: 'justify-center' | 'justify-start' | 'justify-end' | 'justify-between' | 'justify-evenly';
    alignContent?: 'items-center' | 'items-between' | 'items-start' | 'items-end' | 'items-evenly';
};

function BackgroundBlurredOverlay({ image, children, direction = 'flex-col', justify = 'justify-center', alignContent = 'items-center' }: Props) {
  return (
    <div>
        <div
            className="fixed top-0 left-0 blur-[5px] w-screen h-screen"
            style={{
                overflow: "hidden",
                zIndex: 0,
                backgroundImage: `url(${image.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }}
        />
        <div style={{ zIndex: 1 }} className={`absolute left-0 top-0 right-0 bottom-0 flex ${direction} ${justify} ${alignContent}`}>
            {children}
        </div>
    </div>
  )
}

export default BackgroundBlurredOverlay