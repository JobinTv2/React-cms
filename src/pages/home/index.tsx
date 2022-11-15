import React from 'react';
import tw from 'twin.macro';
import { LoanForm } from '../../components/2-molecules/LoanForm';
import { Header } from '../../components/3-organisms/Header';
const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <LoanForm />
      </BodyContainer>
    </Container>
  );
};
export default Home;

const Container = tw.div``;
const BodyContainer = tw.div`w-full h-[90vh] flex justify-center items-center`;
