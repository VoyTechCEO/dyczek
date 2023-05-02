import React from 'react';
import Head from 'next/head';
import useSetPageSpecs from '../../hooks/useSetPageSpecs';

const HeadSet = () => {
  const { title, description, keywords } = useSetPageSpecs();

  return (
    <>
      <Head>
        <title>
          {title ? title : `Henryk Dyczek - medycyna niekonwencjonalna`}
        </title>
        <meta name='description' content={description ? description : `opis`} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content={
            keywords
              ? keywords
              : `henryk dyczek, dyczek, medycyna niekonwencjonalna, akupunktura, chiropraktyka`
          }
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

export default HeadSet;
