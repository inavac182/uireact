import { getRangePosition } from '../../src/__private';

describe('getRangePosition() - position is a %', () => {
  it('Should get the correct range position when no step is used', () => {
    const position = getRangePosition(10, 50, 20);
    expect(position).toBe(25);
  });

  it('Should get the correct range position when value is min', () => {
    const position = getRangePosition(10, 50, 0);
    expect(position).toBe(0);
  });

  it('Should get the correct range position when value is less than min', () => {
    const position = getRangePosition(10, 50, 5);
    expect(position).toBe(0);
  });

  it('Should get the correct range position when value is max', () => {
    const position = getRangePosition(10, 50, 50);
    expect(position).toBe(100);
  });

  it('Should get the correct range position when value is more than max', () => {
    const position = getRangePosition(10, 50, 100);
    expect(position).toBe(100);
  });

  it('Should get the correct range position when using step and value is min', () => {
    const position = getRangePosition(10, 50, 10, 10);
    expect(position).toBe(0);
  });

  it('Should get the correct range position when using step and value is selectable', () => {
    const position = getRangePosition(10, 50, 20, 10);
    expect(position).toBe(25);
  });

  it('Should get the correct range position when using step and value is NOT selectable', () => {
    const position = getRangePosition(10, 50, 20, 20);
    expect(position).toBe(50);
  });
});
