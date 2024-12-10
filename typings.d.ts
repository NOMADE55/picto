type Theme = 'dark' | 'light' | 'default' | 'auto';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BaseSVGConfig {
  cols: number;
  theme?: Theme;
  rounded?: number;
  bg?: boolean;
  size?: number;
  playful?: boolean;
  shadow?: Size;
}
