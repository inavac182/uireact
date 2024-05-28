import { ColorTokens } from '@uireact/foundation';
import { getColorationToken } from '../../src/utils';

describe('getColorationToken', () => {
    it('Should get correct token when is light coloration', () => {
        const result = getColorationToken('light');
        expect(result).toBe(ColorTokens.token_10);
    });
    it('Should get correct token when is light coloration and active', () => {
        const result = getColorationToken('light', true);
        expect(result).toBe(ColorTokens.token_50);
    });
    it('Should get correct token when is dark coloration', () => {
        const result = getColorationToken('dark');
        expect(result).toBe(ColorTokens.token_200);
    });
    it('Should get correct token when is dark coloration and active', () => {
        const result = getColorationToken('dark', true);
        expect(result).toBe(ColorTokens.token_150);
    });
});
