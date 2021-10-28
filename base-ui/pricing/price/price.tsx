import React from 'react';
import styles from './styles.module.scss';

export type PriceProps = {
  isPrevious?: boolean;
  value: number;
};

export function Price({ value, isPrevious }: PriceProps) {
  if (isPrevious) return <span className={styles.previous}>${value}</span>;

  return <span className={styles.current}>${value}</span>;
}
