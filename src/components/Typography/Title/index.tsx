import React from 'react';
import './index.module.scss';
import classNames from 'classnames';

interface TitleProps {
  /** Set content importance : 1 | 2 | 3 | 4 */
  level: 1 | 2 | 3 | 4;
  /** Render content in your `title` component */
  children: any;
  className?: string;
}

export default function Title({ level, className, children }: TitleProps) {
  return React.createElement(
    `h${level}`,
    { className: classNames(className, `h${level}`) },
    children,
  );
}
