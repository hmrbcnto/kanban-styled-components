import { Breakpoint, Media, breakpoints } from '../foundations';

export const breakpointsMedia: Media = (Object.keys(breakpoints) as Breakpoint[]).reduce((acc, v) => {
    acc[v] = `@media screen and (min-width: ${breakpoints[v]}px)`;
    return acc;
}, {} as Record<Breakpoint, string>);

export const media = {
    ...breakpointsMedia,
    retina: '@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)',
};

export const mediaBelow: Media = (Object.keys(breakpoints) as Breakpoint[]).reduce((acc, v) => {
    acc[v] = `@media screen and (max-width: ${breakpoints[v] - 1}px)`;
    return acc;
}, {} as Record<Breakpoint, string>);
