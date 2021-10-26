import React from 'react';
import { Li, LiProps } from '@nitsan770/base-ui.header.li';

export type UlProps = {
  links: string[];
};

export function Ul({ links }: UlProps) {
  return (
    <ul>
      {links.map((link) => (
        <Li text={link} key={link} />
      ))}
    </ul>
  );
}
