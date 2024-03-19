/**
 * @jest-environment node
 */

import { getWindowDimensions } from '../../src/hooks/utils/get-window-deimensions';
import { BreakpointsSizes } from '../../src/responsive/breakpoints-sizes';

describe('getWindowDimensions', () => {
  it('Should get default value when window is not present', () => {
    const { width, height } = getWindowDimensions();

    expect(width).toBe(BreakpointsSizes.l.min);
    expect(height).toBe(BreakpointsSizes.l.min);
  });
});
