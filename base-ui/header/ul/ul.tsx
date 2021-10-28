import React from 'react';
import { Li, LiProps } from '@nitsan770/base-ui.header.li';
import styles from './styles.module.scss';

export type UlProps = {
  links: string[];
};

export function Ul({ links }: UlProps) {
  return (
    <ul className={styles.links}>
      {links?.map((link) => (
        <Li text={link} key={link} />
      ))}
    </ul>
  );
}
