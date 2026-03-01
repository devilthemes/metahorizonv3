import styles from './SliderInfoBox.module.scss';

interface SliderInfoBoxProps {
  items: string[];
}

export default function SliderInfoBox({ items }: SliderInfoBoxProps) {
  return (
    <div className={styles.infoBox}>
      <ul className={styles.infoList}>
        {items.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
