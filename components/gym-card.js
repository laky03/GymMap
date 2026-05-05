"use client";

import { useState } from "react";
import ImageSlideshow from "./image-slideshow";
import styles from "../app/page.module.css";

export default function GymCard({ gym }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className={styles.gymCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageSlideshow images={gym.images} alt={gym.name} isActive={isHovered} />

      <div className={styles.gymContent}>
        <h2>{gym.name}</h2>
        <p className={styles.location}>{gym.location}</p>
        <p className={styles.area}>{gym.area}</p>
        <p className={styles.info}>{gym.info}</p>
      </div>
    </article>
  );
}
