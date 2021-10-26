import React from 'react';

export type LiProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Li({ text }: LiProps) {
  return <li>{text}</li>;
}
