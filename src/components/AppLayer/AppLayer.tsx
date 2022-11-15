import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}
export const AppLayer = (props:Props) => {
  const { children } = props
  return <div className='bg-red-900'>{children}</div>;
};

