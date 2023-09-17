import { Palette, basePalette } from './foundations';

export * from './foundations';
export * as mixins from './mixins';

export interface Theme {
    palette: Palette,
}

export const defaultTheme = {
    palette: basePalette,
};
