import {
  isAppLoadedState,
  isUserLoggedInState,
  siteThemeState,
} from '@/recoilMain';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';

interface Props {
  children: JSX.Element;
}

const AppWrapper = ({ children }: Props) => {
  const router = useRouter();
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useRecoilState(isUserLoggedInState);
  const [isAppLoaded, setIsAppLoaded] = useRecoilState(isAppLoadedState);

  useEffect(() => {
    if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
      setSiteTheme(`imo`);
    } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
      setSiteTheme(`akuChi`);
    } else if (router.pathname.includes(`/szlachetne_zdrowie`)) {
      setSiteTheme(`szlaZd`);
    } else {
      setSiteTheme(``);
    }
  });

  const getUserData = async () => {
    try {
      const res = await fetch(`/api/user`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setIsUserLoggedIn(data.response.isLoggedIn);
      setIsAppLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error } = useQuery(`userData`, async () => {
    await getUserData();
  });

  if (!isAppLoaded) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error occurred during userData fetching.</h1>;
  }

  return <div>{children}</div>;
};

export default AppWrapper;
