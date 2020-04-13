/// <reference types="react" />
interface IllustrationProps {
    /** The width of the `svg` element */
    width?: number;
    /** The height of the `svg` element */
    height?: number;
    /** The information that describe the `svg` element  */
    text?: string;
    /** Define the color used to paint the `svg` element	 */
    color?: string;
}
export default function Signature({ width, height, text, color, ...restProps }: IllustrationProps): JSX.Element;
export {};
