import React from 'react';
import styles from './styles.module.scss';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <div className={styles.button}>Get Started</div>;
}
