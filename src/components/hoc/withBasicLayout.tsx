import React, { ComponentType, ReactNode } from 'react';
import { Divider } from '@mui/material';
import Header, { HeaderProps } from '../layout/Header';
import Footer from '../layout/Footer';

type LayoutProps = {
  children?: ReactNode;
};

export const withBasicLayout = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P & LayoutProps & HeaderProps> => {
  return (props) => (
    <>
      <Header headerChildren={props.headerChildren} />
      <WrappedComponent {...props} />
      <Divider />
      <Footer />
    </>
  );
};
