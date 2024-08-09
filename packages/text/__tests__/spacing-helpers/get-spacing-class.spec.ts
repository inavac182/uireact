import { getSpacingClass } from '../../src/spacing-helpers';

describe('UiSpacing', () => {
  it('Should be empty when no spacing', () => {
    const spacing = getSpacingClass('margin');

    expect(spacing).toBe('');
  });

  it('Should get correct margin', () => {
    const spacing = getSpacingClass('margin', { all: 'five' });

    expect(spacing).toBe('margin-five');
  });

  it('Should get correct margin', () => {
    const spacing = getSpacingClass('margin', { block: 'five' });

    expect(spacing).toBe('margin-top-five margin-bottom-five');
  });

  it('Should get correct padding', () => {
    const spacing = getSpacingClass('padding', { all: 'five' });

    expect(spacing).toBe('padding-five');
  });

  it('Should get correct padding', () => {
    const spacing = getSpacingClass('padding', { block: 'five' });

    expect(spacing).toBe('padding-top-five padding-bottom-five');
  });

  it('Should get correct padding', () => {
    const spacing = getSpacingClass('padding', { left: 'five' });

    expect(spacing).toBe(' padding-left-five');
  });

  it('Should get correct padding', () => {
    const spacing = getSpacingClass('padding', { right: 'five' });

    expect(spacing).toBe(' padding-right-five');
  });

  it('Should get correct padding', () => {
    const spacing = getSpacingClass('margin', { right: 'five' });

    expect(spacing).toBe(' margin-right-five');
  });

  it('Should get correct padding', () => {
    const spacing = getSpacingClass('padding', { top: 'five', bottom: 'four' });

    expect(spacing).toBe('padding-top-five padding-bottom-four');
  });
});
