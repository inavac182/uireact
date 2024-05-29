import React from 'react';

import { MotionProps, motion } from 'framer-motion';

import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiIcon } from '@uireact/icons';
import { UiLink, UiLinkProps } from '@uireact/text';

const itemsSpacing: UiLinkProps['padding'] = {inline: 'four', block: 'three'};
const navbarItemVariants: MotionProps = {
    variants: {
        rest: {
            rotate: 0
        },
        rotate: { 
            rotate: [0, 360, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
            }
        },
        shake: {
            rotate: [0, 45, -45, 0],
            transition: {
                duration: .5,
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    }
};

export const AnimatedNavbarExample = () => {
    return (
        <UiNavbar gap='three' rounded='all' orientation='inline' hoverColoration='light'>
            <UiNavbarItem>
                <UiLink padding={itemsSpacing}>
                    <motion.a href="#" whileHover='rotate' initial='rest'>
                        <UiIcon icon="SettingsBig" category='tertiary' motion={navbarItemVariants} />{" "}
                        Settings
                    </motion.a>
                </UiLink>
            </UiNavbarItem>
            <UiNavbarItem>
                <UiLink padding={itemsSpacing}>
                    <motion.a href="#" whileHover='rotate' initial='rest'>
                        <UiIcon icon="Brightness" category='tertiary' motion={navbarItemVariants} />{" "}
                        Brightness
                    </motion.a>
                </UiLink>
            </UiNavbarItem>
            <UiNavbarItem>
                <UiLink padding={itemsSpacing}>
                    <motion.a href="#" whileHover='shake' initial='rest'>
                        <UiIcon icon="Headphones" category='tertiary' motion={navbarItemVariants} />{" "}
                        Sound
                    </motion.a>
                </UiLink>
            </UiNavbarItem>
            <UiNavbarItem>
                <UiLink padding={itemsSpacing}>
                    <motion.a href="#" whileHover='rotate' initial='rest'>
                        <UiIcon icon="Refresh" category='tertiary' motion={navbarItemVariants} />{" "}
                        Refresh
                    </motion.a>
                </UiLink>
            </UiNavbarItem>
        </UiNavbar>
    )
}