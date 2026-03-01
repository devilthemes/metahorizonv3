"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import styles from "./SliderCards.module.scss";

interface SliderCardsProps {
  cards: Array<{
    label: string;
    href: string;
    icon: LucideIcon;
  }>;
}

export default function SliderCards({ cards }: SliderCardsProps) {
  return (
    <div className={styles.cardsGrid}>
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Link key={index} href={card.href} className={styles.card}>
            <Icon className={styles.cardIcon} size={24} />
            {card.label}
          </Link>
        );
      })}
    </div>
  );
}
