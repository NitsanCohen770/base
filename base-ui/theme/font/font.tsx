import font from './styles.module.scss';

export interface Font {
  font: string;
}

export const globalFont: Font = {
  font: font.fonts,
};
