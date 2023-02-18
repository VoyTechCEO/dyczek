import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../components/headSet/HeadSet';
import MainNav from '../components/mainNav/MainNav';

const akademia: NextPage = () => {
  return (
    <>
      <HeadSet />
      <main id='main'>
        <MainNav />
      </main>
    </>
  );
};

export default akademia;
