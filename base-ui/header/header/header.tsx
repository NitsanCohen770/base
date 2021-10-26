import React from 'react';
import { Ul } from '@nitsan770/base-ui.header.ul';
import { Logo } from '@nitsan770/base-ui.header.logo';

export type HeaderProps = {};
const linkNames = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export function Header() {
  return (
    <>
      <Logo />
      <Ul links={linkNames} />
    </>
  );
}
