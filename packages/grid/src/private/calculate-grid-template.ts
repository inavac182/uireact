import { GridBreakpointsDistribution } from '../';

export const getGridTemplate = (
  spans: number | GridBreakpointsDistribution = 1,
  size = '1fr',
  template: 'cols' | 'rows'
): string => {
  return `${template === 'cols' ? 'grid-template-columns' : 'grid-template-rows'}: repeat(${spans}, ${
    size === '' ? '1fr' : size
  });`;
};
