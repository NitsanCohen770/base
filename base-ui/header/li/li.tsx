import React from 'react';
import { Link } from 'react-router-dom';

export type LiProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Li({ text }: LiProps) {
  return (
    <li>
      <Link
        style={{ textDecoration: 'none', color: 'var(--text-gray)' }}
        to={`/${text}`}
      >
        {text}
      </Link>
    </li>
  );
}
