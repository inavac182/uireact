import { getGridClasses } from '../../src/private';

describe('getGridClasses', () => {
    test('Should return correct template string when using cols', () => {
        const style = getGridClasses({
            className: 'some class'
        });

        expect(style).toEqual(' grid some class');
    });
});
