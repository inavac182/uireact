import { getFlexAlignment } from '../../src/utils';

describe('getFlexAlignment', () => {
  describe('when orientation is inline', () => {
    it('Should get justify content as flex-start when alignment is start', () => {
      const style = getFlexAlignment('start', 'inline');

      expect(style).toBe('justify-content: flex-start;');
    });

    it('Should get justify content as center when alignment is centered', () => {
      const style = getFlexAlignment('center', 'inline');

      expect(style).toBe('justify-content: center;');
    });

    it('Should get justify content as flex-end when alignment is end', () => {
      const style = getFlexAlignment('end', 'inline');

      expect(style).toBe('justify-content: flex-end;');
    });

    it('Should default to justify content centered when alignemnt is undefined', () => {
      const style = getFlexAlignment(undefined, 'inline');

      expect(style).toBe('justify-content: center;');
    });
  });

  describe('orientation stacked', () => {
    it('Should get align content as flex-start when alignment is start', () => {
      const style = getFlexAlignment('start', 'stacked');

      expect(style).toBe('align-items: flex-start;');
    });

    it('Should get align content as center when alignment is center', () => {
      const style = getFlexAlignment('center', 'stacked');

      expect(style).toBe('align-items: center;');
    });

    it('Should get align content as flex-end when alignment is end', () => {
      const style = getFlexAlignment('end', 'stacked');

      expect(style).toBe('align-items: flex-end;');
    });

    it('Should default to align content as center when alignment is center', () => {
      const style = getFlexAlignment(undefined, 'stacked');

      expect(style).toBe('align-items: center;');
    });
  });
});
