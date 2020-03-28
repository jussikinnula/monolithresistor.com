// Fonts
const UBUNTU_CONDENSED = "'Ubuntu Condensed', sans-serif";
const UBUNTU_MONO = "'Ubuntu Mono', monospace";
const FRANCOIS_ONE = "'Francois One', sans-serif";

// Colors
const RICH_BLACK = '#001514';
const MAXIMUM_YELLOW_RED = '#F5B841';
const WHITE = '#FBFFFE';
const ROSEWOOD = '#6B0504';
const INTERDIMENSIONAL_BLUE = '#3B28CC';

export interface Theme {
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  colors: {
    text: string;
    background: string;
    main: string;
    accentLight: string;
    accentDark: string;
    shadow: string;
  };
  fontFamilies: {
    code: string;
    heading: string;
    text: string;
  };
  maxWidth: string;
  padding: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
}

const theme: Theme = {
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  colors: {
    text: RICH_BLACK,
    background: WHITE,
    main: INTERDIMENSIONAL_BLUE,
    accentLight: MAXIMUM_YELLOW_RED,
    accentDark: ROSEWOOD,
    shadow: 'rgba(0,0,0,0.75)'
  },
  fontFamilies: {
    code: UBUNTU_MONO,
    heading: FRANCOIS_ONE,
    text: UBUNTU_CONDENSED
  },
  maxWidth: '1440px',
  padding: {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 18,
    xl: 25
  }
};

export default theme;
