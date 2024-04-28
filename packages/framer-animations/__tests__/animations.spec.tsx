import * as Animations from '../src';

describe('framer-animations', () => {
  it('Animations exists', () => {
    expect(Animations.UiReactFadeUp).not.toBeNull();
    expect(Animations.UiReactFadeDown).not.toBeNull();
    expect(Animations.UiReactFadeLeft).not.toBeNull();
    expect(Animations.UiReactFadeRight).not.toBeNull();
    expect(Animations.UiReactHoverScaleUp).not.toBeNull();
    expect(Animations.UiReactHoverElevate).not.toBeNull();
    expect(Animations.UiReactTapScaleDown).not.toBeNull();
    expect(Animations.UiReactTapPush).not.toBeNull();
    expect(Animations.UiReactViewAppearUp).not.toBeNull();
    expect(Animations.UiReactViewAppearLeft).not.toBeNull();
    expect(Animations.UiReactViewAppearRight).not.toBeNull();
    expect(Animations.UiReactViewFloat).not.toBeNull();
    expect(Animations.UiReactViewPulse).not.toBeNull();
  });
});
