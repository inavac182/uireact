import { ColorCategory, ColorToken, SpacingDistribution, UiReactElementProps } from "@uireact/foundation";
import { MotionProps } from "motion/react";

export type UiCardProps = UiReactElementProps & {
    /** on click handler used for handling custom card clicks, when passed cursor pointer is used */
    clickHandler?: (idenfifier: string | undefined) => void;
    /** The identifier that is shared to the click handler when card is clicked */
    identifier?: string;
    /** Link for redirecting when card is clicked */
    link?: string;
    /** Padding used inside card */
    padding?: SpacingDistribution;
    /** Color category for the card */
    category?: ColorCategory;
    /** Card weight used for background color */
    weight?: ColorToken;
    /** Card styling */
    styling?: 'outlined' | 'filled';
    /** Framer motion props */
    motion?: MotionProps;
  } & React.AriaAttributes;
  