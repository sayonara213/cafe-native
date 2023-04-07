import React from 'react';
import Header from '@components/organisms/Header/header';

interface MainLayoutProps {
  children: React.ReactNode | undefined;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isAuth={true} value={'log in'} />
      {children}
    </>
  );
};

export default MainLayout;
