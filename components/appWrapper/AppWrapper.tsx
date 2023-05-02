import { siteThemeState } from '@/recoilMain';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  children: JSX.Element;
}

const AppWrapper = ({ children }: Props) => {
  const router = useRouter();

  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);

  useEffect(() => {
    if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
      setSiteTheme(`imo`);
    } else if (router.pathname.includes(`/szlachetne_zdrowie`)) {
      setSiteTheme(`szlaZd`);
    } else {
      setSiteTheme(``);
    }
  });

  return <div>{children}</div>;
};

export default AppWrapper;
