import { px2rems } from "$/ui/utils/px-to-rem";

export const TOPI_LOGO =
  "https://storage.googleapis.com/topi-logos-production/topi_logo.svg";

export const breakpoints = {
  s: 320,
  m: 800,
  l: 1200,
  xl: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const brand = {
  logoURL: TOPI_LOGO,
  infoHubUrl: "",
};

export const colors = {
  // Brand colors
  topiBlue05: "#EFF2FF",
  topiBlue10: "#CCD5FF",
  topiBlue20: "#A6B5FF",
  topiBlue30: "#6680FF",
  topiBlue40: "#3355FF",
  topiBlue50: "#002BFF",
  topiBlue60: "#0022CC",
  topiBlue70: "#001A99",

  topiPink05: "#FFE9F1",
  topiPink10: "#FFCCE0",
  topiPink50: "#FF0062",

  // Grey scale
  white: "#FFFFFF",
  black: "#000000",

  grey04: "#F2F4F8",
  grey10: "#DFE4EC",
  grey15: "#D2D7DF",
  grey20: "#C6CBD2",
  grey30: "#ACB1B9",
  grey40: "#93989F",
  grey60: "#6B6F75",
  grey80: "#303236",
  grey90: "#18191B",

  // State colors
  green05: "#EDF8F5",
  green10: "#DBF0EB",
  green20: "#92D3C3",
  green70: "#009974",
  yellow05: "#FFF4E5",
  yellow10: "#FFE8CC",
  yellow20: "#FFC47F",
  yellow50: "#FF8A00",
  yellow60: "#E06C00",
  red05: "#FDE8E8",
  red10: "#FAD1D1",
  red20: "#F7B3B3",
  red40: "#EB4747",
  red50: "#E61919",
  red60: "#C80404",
  red70: "#990800",

  // Alpha
  alpha04: "rgba(24, 25, 27, 0.04)",
  alpha08: "rgba(24, 25, 27, 0.08)",
  alpha20: "rgba(0, 9, 51, 0.2)",
  alpha40: "rgba(0, 9, 51, 0.4)",
} as const;

export type Color = keyof typeof colors;

export type Colors = (typeof colors)[Color];

export const sizes = {
  sz002: px2rems(2),
  sz004: px2rems(4),
  sz008: px2rems(8),
  sz012: px2rems(12),
  sz016: px2rems(16),
  sz020: px2rems(20),
  sz024: px2rems(24),
  sz032: px2rems(32),
  sz034: px2rems(34),
  sz040: px2rems(40),
  sz044: px2rems(44),
  sz048: px2rems(48),
  sz056: px2rems(56),
  sz064: px2rems(64),
  sz080: px2rems(80),
  sz096: px2rems(96),
  sz128: px2rems(128),
  sz160: px2rems(160),
  sz200: px2rems(200),
  sz240: px2rems(240),
  sz260: px2rems(260),
  sz312: px2rems(312),
  sz354: px2rems(346),
  sz400: px2rems(400),
  sz480: px2rems(480),
  sz644: px2rems(644),
  sz866: px2rems(866),
  sz1040: px2rems(1040),
} as const;

export type Size = keyof typeof sizes;

export const spacing = {
  sp001: px2rems(1),
  sp002: px2rems(2),
  sp004: px2rems(4),
  sp008: px2rems(8),
  sp010: px2rems(10),
  sp012: px2rems(12),
  sp016: px2rems(16),
  sp020: px2rems(20),
  sp024: px2rems(24),
  sp028: px2rems(28),
  sp030: px2rems(30),
  sp032: px2rems(32),
  sp036: px2rems(36),
  sp040: px2rems(40),
  sp042: px2rems(42),
  sp044: px2rems(44),
  sp048: px2rems(48),
  sp056: px2rems(56),
  sp064: px2rems(64),
  sp080: px2rems(80),
  sp096: px2rems(96),
  sp098: px2rems(98),
  sp100: px2rems(100),
  sp128: px2rems(128),
} as const;

export type Spacing = keyof typeof spacing;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
} as const;

export type FontWeight = keyof typeof fontWeights;

export const topiFont = "/fonts/readex-pro.ttf";

export const fontFaces = {
  primary:
    "'Readex Pro', 'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  code: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace",
} as const;

export type FontFace = keyof typeof fontFaces;

export const letterSpacing = {
  xxl: "0.04em",
  xl: "-0.024em",
  l: "-0.016em",
  m: "-0.012em",
  s: "-0.008em",
  xs: "-0.004em",
} as const;

export type LetterSpacing = keyof typeof letterSpacing;

export const typography = {
  headline1: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(96),
    "line-height": 1,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.xl,
  },
  headline1small: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(32),
    "line-height": 1.125,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.xl,
  },
  headline2: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(32),
    "line-height": 1.125,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.l,
  },
  headline2small: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(24),
    "line-height": 1.16,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.l,
  },
  headline3: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(20),
    "line-height": 1.2,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.m,
  },
  headline4: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(16),
    "line-height": 1.25,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.s,
  },
  overline: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(11),
    "line-height": 1.45,
    "font-weight": fontWeights.regular,
    "letter-spacing": letterSpacing.xxl,
    "text-transform": "uppercase",
  },
  body1Emphasis: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(14),
    "line-height": 1.4,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.xs,
  },
  body1: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(14),
    "line-height": 1.4,
    "font-weight": fontWeights.light,
    "letter-spacing": letterSpacing.xs,
  },
  body2Emphasis: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(12),
    "line-height": 1.3,
    "font-weight": fontWeights.medium,
    "letter-spacing": letterSpacing.xs,
  },
  body2: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(12),
    "line-height": 1.3,
    "font-weight": fontWeights.light,
    "letter-spacing": letterSpacing.xs,
  },
  captionEmphasis: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(10),
    "line-height": 1.6,
    "font-weight": fontWeights.medium,
  },
  caption: {
    "font-family": fontFaces.primary,
    "font-size": px2rems(10),
    "line-height": 1.6,
    "font-weight": fontWeights.light,
  },
} as const;

export type Typography = keyof typeof typography;

export const borderWidths = {
  xs: px2rems(0.5),
  sm: px2rems(1),
  md: px2rems(2),
  lg: px2rems(4),
} as const;

export type BorderWidth = keyof typeof borderWidths;

export const borderRadius = {
  xs: px2rems(2),
  s: px2rems(4),
  m: px2rems(8),
  l: px2rems(12),
  xl: px2rems(16),
  xxl: px2rems(24),
  rounded: "50%",
} as const;

export type BorderRadius = keyof typeof borderRadius;

export const blurRadius = {
  overlay: px2rems(8),
  colorfulBackground: px2rems(245),
} as const;

export type BlurRadius = keyof typeof blurRadius;

export const transitions = {
  fast: "100ms ease",
  medium: "200ms ease",
} as const;

export type Transition = keyof typeof transitions;

export const shadows = {
  xs: `0 ${px2rems(1)} ${px2rems(2)} ${px2rems(-2)} ${
    colors.alpha04
  }, 0 ${px2rems(1)} ${px2rems(4)} ${colors.alpha04}`,
  s: `0 ${px2rems(1)} ${px2rems(4)} ${px2rems(-2)} ${
    colors.alpha04
  }, 0 ${px2rems(2)} ${px2rems(8)} ${colors.alpha04}`,
  m: `0 ${px2rems(2)} ${px2rems(8)} ${px2rems(-2)} ${
    colors.alpha04
  }, 0 ${px2rems(4)} ${px2rems(16)} ${colors.alpha04}`,
  l: `0 ${px2rems(4)} ${px2rems(16)} ${px2rems(-2)} ${
    colors.alpha04
  }, ${px2rems(4)} ${px2rems(12)} ${px2rems(32)} ${colors.alpha04}`,
  xl: `0 ${px2rems(8)} ${px2rems(32)} ${px2rems(-2)} ${
    colors.alpha04
  }, 0 ${px2rems(24)} ${px2rems(64)} ${colors.alpha04}`,
} as const;

export type Shadow = keyof typeof shadows;

export const backgroundImages = {
  roundedCheckmark:
    "url(\"data:image/svg+xml;utf8,<svg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 1L4.32955 8L1 4.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
  checkmark:
    "url(\"data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6 10.5L8.5 13L14.5 7' stroke='white'/></svg>\")",
} as const;

export type BackgroundImage = keyof typeof backgroundImages;

export const times = {
  slow: 5000,
  medium: 2000,
  fast: 1000,
  superfast: 500,
};

export type Time = keyof typeof times;

export const zIndices = {
  mobileMenu: 1,
  menu: 10,
  modal: 9999,
  toast: 10_000,
} as const;
