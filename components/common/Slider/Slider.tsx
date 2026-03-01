"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Headphones,
  Fingerprint,
  BrainCircuit,
  Cloud,
  Code,
  UserPlus,
  Sparkles,
  FileText,
  TrendingUp,
  Users,
  Award,
  BadgeCheck,
  Zap,
} from "lucide-react";
import type { SlideData, SliderProps } from "@/types/slider";
import SliderCards from "./SliderCards";
import SliderInfoBox from "./SliderInfoBox";
import SliderNavigation from "./SliderNavigation";
import styles from "./Slider.module.scss";

const DEFAULT_INTERVAL = 5000;

const defaultSlides: SlideData[] = [
  {
    id: 1,
    title: "Delivery & Operations",
    subtitle: "Enterprise Technology Solutions",
    image: "/assets/img/slider/slider-image-1.jpg",
    infoItems: ["Cutting Edge", "Expert Team", "Industry Leading"],
    cards: [
      {
        label: "Support & SOC & Pentesting",
        href: "/services/support-soc-pentesting",
        icon: Headphones,
      },
      {
        label: "Identity & Access Management",
        href: "/services/identity-access-management",
        icon: Fingerprint,
      },
      {
        label: "Data Science & AI/ML",
        href: "/services/data-science-ai",
        icon: BrainCircuit,
      },
      { label: "DevOps & Cloud", href: "/services/devops-cloud", icon: Cloud },
      {
        label: "Custom Software Development",
        href: "/services/custom-software",
        icon: Code,
      },
      {
        label: "Expert-as-a-Service",
        href: "/services/expert-as-a-service",
        icon: UserPlus,
      },
    ],
  },
  {
    id: 2,
    title: "Metahorizon Product Labs",
    subtitle: "Innovative & Fully Customized Products",
    image: "/assets/img/slider/slider-image-2.jpg",
    infoItems: ["Cutting Edge", "100% Customize", "24/7 Support"],
    cards: [
      { label: "MetaAuthIAM", href: "https://metaauthiam.com", icon: Sparkles },
      { label: "Metahorizon Qvolv", href: "/products/qvolv", icon: Sparkles },
      {
        label: "Metahorizon Documme",
        href: "/products/documme",
        icon: FileText,
      },
    ],
  },
  {
    id: 3,
    title: "Metahorizon Academy",
    subtitle: "Upskilling & Professional Development",
    image: "/assets/img/slider/slider-image-3.jpg",
    infoItems: [
      "Expert Instructors",
      "Flexible Learning",
      "Industry Recognized",
    ],
    cards: [
      {
        label: "Professional Development",
        href: "/academy/professional-development",
        icon: TrendingUp,
      },
      {
        label: "Leadership Skills Tracks",
        href: "/academy/leadership",
        icon: Users,
      },
      {
        label: "Degree & Diploma Programs",
        href: "/academy/degree-diploma",
        icon: Award,
      },
      {
        label: "Global Certifications",
        href: "/academy/global-certifications",
        icon: BadgeCheck,
      },
      {
        label: "Skill Enhancement",
        href: "/academy/skill-enhancement",
        icon: Zap,
      },
    ],
  },
];

export default function Slider({
  slides = defaultSlides,
  autoPlay = true,
  autoPlayInterval = DEFAULT_INTERVAL,
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide) return;
      setPreviousSlide(currentSlide);
      setCurrentSlide(index);
      setIsFading(true);
      setTimeout(() => setIsFading(false), 500);
    },
    [currentSlide],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  return (
    <section
      className={styles.sliderSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slideWrapper} ${index === currentSlide ? styles.active : ""} ${index === previousSlide && isFading ? styles.fadingOut : ""}`}
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <div className={styles.sliderContent}>
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={styles.slideImage}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    width={800}
                    height={600}
                  />
                  <SliderInfoBox items={slide.infoItems} />
                </div>
              </div>
              <div className={styles.contentSection}>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                <SliderCards cards={slide.cards} />
              </div>
            </div>
          </div>
        ))}
        <SliderNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </section>
  );
}
