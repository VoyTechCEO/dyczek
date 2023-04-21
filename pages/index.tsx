import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import HomeHeader from '@/components/homeHeader/HomeHeader';
import Footer from '@/components/footer/Footer';
import HomeMainContent from '@/components/homeMainContent/HomeMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

export default function Home() {
  return (
    <>
      <HeadSet />
      <main id='main'>
        <HomeHeader />
        <MainNav />
        <HomeMainContent />
        <Footer sinceYear={2008} />
      </main>
    </>
  );
}
