import '@/styles/globals.css';
import '@/styles/akademiaChiropraktykiStyles.css';
import '@/styles/akupunkturaChiropraktykaStyles.css';
import '@/styles/instytutMedycynyOrientalnejStyles.css';
import type { AppProps } from 'next/app';
import { RecoilRoot, useRecoilState } from 'recoil';
import AppWrapper from '../components/appWrapper/AppWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </RecoilRoot>
  );
}
