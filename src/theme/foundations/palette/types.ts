export type PaletteColorValueKeys = 'main' | 'hover' | 'dark' | 'light' | 'medium';
export type PaletteColorValue = Partial<Record<PaletteColorValueKeys, string>>;
export type PaletteBaseColors = 'purple' | 'black' | 'bg' | 'lines' | 'grey' | 'white' | 'red';

export type Palette = Record<PaletteBaseColors, PaletteColorValue>;
