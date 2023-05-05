import '@/styles/globals.css';
import '@/styles/akademiaChiropraktykiStyles.css';
import '@/styles/akupunkturaChiropraktykaStyles.css';
import '@/styles/instytutMedycynyOrientalnejStyles.css';
import '@/styles/szlachetneZdrowieStyles.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import AppWrapper from '../components/appWrapper/AppWrapper';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </RecoilRoot>
  );
}

export default appWithTranslation(App);
