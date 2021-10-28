import React from 'react';
import { Ul } from '@nitsan770/base-ui.header.ul';
import { Logo } from '@nitsan770/base-ui.header.logo';
import styles from './styles.module.scss';

export type HeaderProps = {};

const linkNames = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export function Header() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Ul links={linkNames} />
    </div>
  );
}
