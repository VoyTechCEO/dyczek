import React from 'react';
import Head from 'next/head';
import useSetPageSpecs from '../../hooks/useSetPageSpecs';

const HeadSet = () => {
  const { title, description, keywords, favicon } = useSetPageSpecs();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href={favicon} />
      </Head>
    </>
  );
};

export default HeadSet;
