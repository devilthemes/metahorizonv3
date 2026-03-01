"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import styles from "./Testimonials.module.scss";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Metahorizon transformed our security architecture with a clear Zero Trust roadmap. Their team's expertise, responsiveness, and practical implementation approach significantly improved our risk posture and operational confidence.",
    name: "Sophia Reynolds",
    role: "CTO",
    company: "FinTrust Solutions",
    image: "/assets/img/face1-120x120.jpg",
    rating: 5,
  },
  {
    quote:
      "Partnering with Metahorizon accelerated our cloud modernization journey. Their consultants delivered scalable, future-ready solutions that improved performance, reduced costs, and empowered our engineering teams.",
    name: "Priya Sharma",
    role: "CTO",
    company: "NexaDigital Systems",
    image: "/assets/img/face2-120x120.jpg",
    rating: 5,
  },
  {
    quote:
      "Metahorizon's professional training programs gave our team real-world, applicable skills in AI and DevOps. The instructors were exceptional, and the impact on our productivity was immediate.",
    name: "Carlos Mendoza",
    role: "Sr. Engineer",
    company: "Vertex Innovations",
    image: "/assets/img/avatar-120x120.jpg",
    rating: 5,
  },
];

export default function Testimonials({
  title = "Trusted by Industry Leaders",
  subtitle = "See what our clients say about our enterprise solutions and services",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 900) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 600) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex + visibleCount > testimonials.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return Math.max(0, testimonials.length - visibleCount);
      }
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + visibleCount < testimonials.length;

  const trackTransform = `translateX(-${(currentIndex * 100) / visibleCount}%)`;

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        <div className={styles.testimonialsWrapper}>
          <button
            onClick={prevSlide}
            className={`${styles.navButton} ${styles.prev} ${!canGoPrev ? styles.disabled : ""}`}
            aria-label="Previous testimonial"
            disabled={!canGoPrev}
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.testimonialsViewport}>
            <div
              className={styles.testimonialsTrack}
              style={{ transform: trackTransform }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialQuote}>
                      "{testimonial.quote}"
                    </p>

                    <div className={styles.testimonialAuthor}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={styles.authorImage}
                      />
                      <div className={styles.authorInfo}>
                        <span className={styles.authorName}>
                          {testimonial.name}
                        </span>
                        <span className={styles.authorRole}>
                          {testimonial.role} - {testimonial.company}
                        </span>
                      </div>
                    </div>

                    {testimonial.rating && (
                      <div className={styles.rating}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#FBBF24"
                            className={styles.star}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.next} ${!canGoNext ? styles.disabled : ""}`}
            aria-label="Next testimonial"
            disabled={!canGoNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from(
            { length: Math.max(1, testimonials.length - visibleCount + 1) },
            (_, i) => i,
          ).map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
