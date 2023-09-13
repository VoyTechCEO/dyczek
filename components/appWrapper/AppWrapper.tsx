import {
  isAppLoadedState,
  isUserLoggedInState,
  siteThemeState,
} from '@/recoilMain';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import MainLoading from '../mainLoading/MainLoading';
import MainError from '../mainError/MainError';

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
    } else if (router.pathname.includes(`/akupunktura_kosmetyczna`)) {
      setSiteTheme(`akuKos`);
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
      console.log(data);

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
    return <MainLoading />;
  }

  if (error) {
    return <MainError />;
  }

  return <div>{children}</div>;
};

export default AppWrapper;
