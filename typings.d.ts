type Theme = 'dark' | 'light' | 'default' | 'auto';
type Round =
  | '0'
  | '6'
  | '12'
  | '18'
  | '24'
  | '36'
  | '48'
  | '60'
  | '200';

interface BaseSVGConfig {
  cols: number;
  theme?: Theme;
  round?: Round;
  bg?: boolean;
  size?: number;
}
