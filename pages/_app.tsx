import '@/styles/globals.css';
import '@/styles/akademiaChiropraktykiStyles.css';
import '@/styles/akupunkturaChiropraktykaStyles.css';
import '@/styles/instytutMedycynyOrientalnejStyles.css';
import '@/styles/szlachetneZdrowieStyles.css';
import '@/styles/akupunkturaKosmetycznaStyles.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import AppWrapper from '../components/appWrapper/AppWrapper';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default appWithTranslation(App);
