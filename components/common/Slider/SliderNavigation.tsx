'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './SliderNavigation.module.scss';

interface SliderNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export default function SliderNavigation({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoToSlide,
}: SliderNavigationProps) {
  return (
    <>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className={styles.navIcon} size={24} />
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onNext}
        aria-label="Next slide"
      >
        <ChevronRight className={styles.navIcon} size={24} />
      </button>

      <div className={styles.indicators}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => onGoToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
