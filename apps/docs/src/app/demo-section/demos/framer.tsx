import styled from 'styled-components';
import { motion } from 'framer-motion';

import { UiHeading, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

export const FramerMotionDemo = () => {
    return (
        <DemoCard category='secondary'>
            <>
                <UiHeading inverseColoration>Framer Motion</UiHeading>
                <br />
                <UiText inverseColoration>Components animated with framer</UiText>
                <br />
                <motion.div
                    className="box"
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'var(--primary-token_100)',
                        margin: '0 auto',
                        display: 'flex'
                    }}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    🌕
                </motion.div>
            </>
        </DemoCard>
    )
}