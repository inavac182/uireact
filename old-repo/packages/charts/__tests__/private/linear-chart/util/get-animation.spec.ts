import { getAnimation } from '../../../../src/private/linear-chart/util';

describe('getAnimation', () => {
  it('Should get correct animation', () => {
    const animation = getAnimation(5);

    expect(animation.rules).toBe(`
  0% {
    width: 0;
  }
  100% {
    width: 5%;
  }
`);
  });
});
