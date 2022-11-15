import React from 'react';
import tw from 'twin.macro';

export const Header: React.FC = () => {
  return (
    <Container>
      <Label>CMS</Label>
    </Container>
  );
};

const Container = tw.div`w-full h-16 flex items-center shadow-md px-7`;
const Label = tw.span`text-gray-700 font-semibold`;
