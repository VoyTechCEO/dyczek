import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import AkademiaHeader from '../../components/akademiaHeader/AkademiaHeader';

const Akademia: NextPage = () => {
  return (
    <>
      <HeadSet
        title='AKADEMIA CHIROPRAKTYKI'
        keywords='akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk'
      />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <Footer sinceYear={1999} />
      </main>
    </>
  );
};

export default Akademia;
