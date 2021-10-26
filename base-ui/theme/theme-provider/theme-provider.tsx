import React from 'react';
import classNames from 'classnames';
import { colorPalette } from '@nitsan770/base-ui.theme.color-palette';

export function ThemeProvider(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(colorPalette.colors, props.className)}
    ></div>
  );
}
