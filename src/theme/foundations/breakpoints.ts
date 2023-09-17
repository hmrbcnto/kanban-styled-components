export type Breakpoints = Record<Breakpoint, number>;
export type Media = Record<Breakpoint, string>;

export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export const breakpoints: Breakpoints = {
    mobile: 375,
    tablet: 768,
    laptop: 1140,
    desktop: 1440,
};
