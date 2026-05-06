"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

export default function ImageSlideshow({
  images,
  alt,
  isActive,
  interval = 800,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCurrentImageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, images.length, interval]);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, 300px"
          className={index === currentImageIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
}
