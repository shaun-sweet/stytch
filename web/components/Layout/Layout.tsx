import { PropsWithChildren } from 'react';
import classes from './layout.module.css';

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className={classes.layout}>{children}</div>;
};
