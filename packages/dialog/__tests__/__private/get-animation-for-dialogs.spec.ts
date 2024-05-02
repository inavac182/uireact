import { UiReactFadeLeft, UiReactFadeRight } from '@uireact/framer-animations';
import { UiDialogType } from '../../src';
import { getAnimationForDialog } from '../../src/__private';

describe('getAnimationForDialog', () => {
    it('Should retrieve correct animation for centered dialog', () => {
        const animation = getAnimationForDialog(UiDialogType.CENTERED);
        expect(animation).toEqual({ initial: { opacity: 0, y: '-40%', x: '-50%', scale: 0.8 }, animate: { opacity: 1, y: '-50%', x: '-50%', scale: 1} });
    });

    it('Should retrieve correct animation for fullscreen dialog', () => {
        const animation = getAnimationForDialog(UiDialogType.FULLSCREEN);
        expect(animation).toEqual({ initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1} });
    });

    it('Should retrieve correct animation for bottom dialog', () => {
        const animation = getAnimationForDialog(UiDialogType.BOTTOM);
        expect(animation).toEqual({ initial: { opacity: 0, x: '-50%', y: 10 }, animate: { opacity: 1, x: '-50%', y: 0} });
    });

    it('Should retrieve correct animation for left dialog', () => {
        const animation = getAnimationForDialog(UiDialogType.LEFT);
        expect(animation).toEqual(UiReactFadeLeft);
    });

    it('Should retrieve correct animation for right dialog', () => {
        const animation = getAnimationForDialog(UiDialogType.RIGHT);
        expect(animation).toEqual(UiReactFadeRight);
    });

    it('Should get null when unrecognized dialog type is used', () => {
        // @ts-ignore
        const animation = getAnimationForDialog('something');
        expect(animation).toBeNull();
    });
});
