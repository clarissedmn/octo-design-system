/// <reference types="react" />
interface Props {
    /** The width of the `svg` element */
    width?: number;
    /** The height of the `svg` element */
    height?: number;
    /** The information that describe the `svg` element  */
    text: string;
    /** Define the color used to paint the `svg` element	 */
    white?: string;
}
export default function CodedLogo({ width, height, text, white, ...restProps }: Props): JSX.Element;
export {};
