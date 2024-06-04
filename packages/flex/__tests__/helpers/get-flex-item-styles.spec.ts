import { getFlexItemStyles } from '../../src/helpers';

describe('getFlexItemStyles', () => {
    it('Should get correct styles', () => {
        const styles = getFlexItemStyles({ grow: 1, order: 2, shrink: 0 });
        expect(styles.flexGrow).toBe(1);
        expect(styles.order).toBe(2);
        expect(styles.flexShrink).toBeUndefined();
    });

    it('Should get correct styles', () => {
        const styles = getFlexItemStyles({ grow: 1, order: 2, shrink: 3 });
        expect(styles.flexGrow).toBe(1);
        expect(styles.order).toBe(2);
        expect(styles.flexShrink).toBe(3);
    });
})