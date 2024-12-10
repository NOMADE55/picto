type Theme = 'dark' | 'light' | 'default' | 'auto';

interface BaseSVGConfig {
  cols: number;
  theme?: Theme;
  rounded?: number;
  bg?: boolean;
  size?: number;
  playful?: boolean;
}
